from typing import Dict
from typing import List
from typing import Optional
from typing import Union

import dataclasses
import pandas as pd

from evidently import ColumnMapping
from evidently.calculations.data_quality import ColumnCorrelations
from evidently.calculations.data_quality import calculate_category_column_correlations
from evidently.calculations.data_quality import calculate_numerical_column_correlations
from evidently.metrics.base_metric import InputData
from evidently.metrics.base_metric import Metric
from evidently.model.widget import BaseWidgetInfo
from evidently.renderers.base_renderer import MetricRenderer
from evidently.renderers.base_renderer import default_renderer
from evidently.renderers.html_widgets import TabData
from evidently.renderers.html_widgets import get_histogram_for_distribution
from evidently.renderers.html_widgets import header_text
from evidently.renderers.html_widgets import widget_tabs
from evidently.utils.data_operations import process_columns
from evidently.utils.data_operations import recognize_column_type
from evidently.features.non_letter_character_percentage_feature import NonLetterCharacterPercentage
from evidently.features.OOV_words_percentage_feature import OOVWordsPercentage
from evidently.features.text_length_feature import TextLength
from evidently.utils.data_preprocessing import DataDefinition
from evidently.utils.data_preprocessing import ColumnType as ColumnType_data
from evidently.pipeline.column_mapping import ColumnMapping


@dataclasses.dataclass
class TextCharacteristicsCorrelationMetricResult:
    column_name: str
    current: Dict[str, ColumnCorrelations]
    reference: Optional[Dict[str, ColumnCorrelations]] = None


class TextCharacteristicsCorrelationMetric(Metric[TextCharacteristicsCorrelationMetricResult]):
    """Calculates correlations between each auto-generated text feature for column_name and other dataset columns"""

    column_name: str
    generated_text_features: Optional[
        Dict[str, Union[TextLength, NonLetterCharacterPercentage, OOVWordsPercentage]]
    ]

    def __init__(self, column_name: str) -> None:
        self.column_name = column_name
        self.generated_text_features = None
    
    def required_features(self, data_definition: DataDefinition):
        column_type = data_definition.get_column(self.column_name).column_type
        if column_type == ColumnType_data.Text:
            self.generated_text_features = {}
            self.generated_text_features["Text Length"] = TextLength(self.column_name)
            self.generated_text_features["Non Letter Character %"] = NonLetterCharacterPercentage(self.column_name)
            self.generated_text_features["OOV %"] = OOVWordsPercentage(self.column_name)
            return list(self.generated_text_features.values())
        return []

    def get_parameters(self) -> tuple:
        return self.column_name

    def calculate(self, data: InputData) -> TextCharacteristicsCorrelationMetricResult:
        if self.column_name not in data.current_data:
            raise ValueError(f"Column '{self.column_name}' was not found in current data.")

        if data.reference_data is not None:
            if self.column_name not in data.reference_data:
                raise ValueError(f"Column '{self.column_name}' was not found in reference data.")
        
        columns = process_columns(data.current_data, data.column_mapping)
        correlation_columns = columns.num_feature_names

        curr_text_df = pd.concat(
            [data.get_current_column(x.feature_name()) for x in list(self.generated_text_features.values())],
            axis=1,
        )
        curr_text_df.columns = list(self.generated_text_features.keys())
        curr_df = pd.concat(
            [data.current_data.copy().reset_index(drop=True), curr_text_df.reset_index(drop=True)],
            axis=1
        )
        ref_df = None
        if data.reference_data is not None:
            ref_text_df = pd.concat(
                [data.get_reference_column(x.feature_name()) for x in list(self.generated_text_features.values())],
                axis=1,
            )
            ref_text_df.columns = list(self.generated_text_features.keys())
            ref_df = pd.concat(
                [data.reference_data.copy().reset_index(drop=True), ref_text_df.reset_index(drop=True)],
                axis=1
            )
        curr_result = {}
        ref_result: Optional[dict] = None
        if ref_df is not None:
            ref_result = {}

        for col in list(self.generated_text_features.keys()):
            curr_result[col] = calculate_numerical_column_correlations(col, curr_df, correlation_columns)
            if ref_df is not None:
                ref_result[col] = calculate_numerical_column_correlations(col, ref_df, correlation_columns)

        return TextCharacteristicsCorrelationMetricResult(
            column_name=self.column_name,
            current=curr_result,
            reference=ref_result,
        )

import logging
@default_renderer(wrap_type=TextCharacteristicsCorrelationMetric)
class TextCharacteristicsCorrelationMetricRenderer(MetricRenderer):
    def render_json(self, obj: TextCharacteristicsCorrelationMetric) -> dict:
        result = dataclasses.asdict(obj.get_result())
        return result

    def _get_plots_correlations(self, curr_metric_result: Dict, ref_metric_result: Dict) -> Optional[BaseWidgetInfo]:
        tabs = []

        for correlation_name, current_correlation in curr_metric_result.items():
            reference_correlation_values = None

            if ref_metric_result is not None and correlation_name in ref_metric_result:
                reference_correlation_values = ref_metric_result[correlation_name].values
            # logging.warning(reference_correlation_values)
            if current_correlation.values or reference_correlation_values:
                tabs.append(
                    TabData(
                        title=correlation_name,
                        widget=get_histogram_for_distribution(
                            title="",
                            current_distribution=current_correlation.values,
                            reference_distribution=reference_correlation_values,
                            xaxis_title="Columns",
                            yaxis_title="Correlation",
                            color_options=self.color_options,
                        ),
                    )
                )

        if tabs:
            return widget_tabs(tabs=tabs)

        else:
            return None

    def render_html(self, obj: TextCharacteristicsCorrelationMetric) -> List[BaseWidgetInfo]:
        metric_result = obj.get_result()
        result = [header_text(label=f"Correlations for column '{metric_result.column_name}'.")]
        for col in list(metric_result.current.keys()):
            correlation_plots = self._get_plots_correlations(metric_result.current[col], metric_result.reference[col])
            if correlation_plots:
                result.append(header_text(label=f"{col}"))
                result.append(correlation_plots)
        return result
