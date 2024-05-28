from typing import List
from typing import Optional

import pandas as pd

from evidently.core import ColumnType
from evidently.features.generated_features import GeneratedFeature
from evidently.utils.data_preprocessing import DataDefinition


class Contains(GeneratedFeature):
    column_name: str
    items: List[str]
    case_sensitive: bool
    mode: str

    def __init__(
        self,
        column_name: str,
        items: List[str],
        case_sensitive: bool = True,
        mode: str = "any",
        display_name: Optional[str] = None,
    ):
        self.feature_type = ColumnType.Categorical
        self.column_name = column_name
        if display_name:
            self.display_name = display_name
        else:
            self.display_name = f"Text Contains of {mode} [{', '.join(items)}] for {column_name}"
        self.case_sensitive = case_sensitive
        if mode not in ["any", "all"]:
            raise ValueError("mode must be either 'any' or 'all'")
        self.mode = mode
        self.items = items
        super().__init__()

    def generate_feature(self, data: pd.DataFrame, data_definition: DataDefinition) -> pd.Series:
        if self.mode == "any":
            calculated = data[self.column_name].str.contains("|".join(self.items), case=self.case_sensitive)
        elif self.mode == "all":
            calculated = data[self.column_name].apply(lambda x: all(self.comparison(i, x) for i in self.items))
        else:
            raise ValueError("mode must be either 'any' or 'all'")
        return calculated

    def comparison(self, item: str, string: str):
        if self.case_sensitive:
            return item in string
        return item.casefold() in string.casefold()


class DoesNotContain(GeneratedFeature):
    column_name: str
    items: List[str]
    case_sensitive: bool
    mode: str

    def __init__(
        self,
        column_name: str,
        items: List[str],
        case_sensitive: bool = True,
        mode: str = "any",
        display_name: Optional[str] = None,
    ):
        self.feature_type = ColumnType.Categorical
        self.column_name = column_name
        if display_name:
            self.display_name = display_name
        else:
            self.display_name = f"Text Contains of {self.mode} [{', '.join(self.items)}] for {self.column_name}"
        self.case_sensitive = case_sensitive
        if mode not in ["any", "all"]:
            raise ValueError("mode must be either 'any' or 'all'")
        self.mode = mode
        self.items = items
        super().__init__()

    def generate_feature(self, data: pd.DataFrame, data_definition: DataDefinition) -> pd.Series:
        if self.mode == "any":
            calculated = ~data[self.column_name].str.contains("|".join(self.items), case=self.case_sensitive)
        elif self.mode == "all":
            calculated = ~data[self.column_name].apply(lambda x: all(self.comparison(i, x) for i in self.items))
        else:
            raise ValueError("mode must be either 'any' or 'all'")
        return calculated

    def comparison(self, item: str, string: str):
        if self.case_sensitive:
            return item in string
        return item.casefold() in string.casefold()
