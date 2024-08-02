// This file was auto-generated by openapi-typescript.
// TODO: add docs
import type { components, paths } from '~/api/types/endpoints'

// TODO: fix this `WidgetInfo` import
// use Schemas['BaseWidgetInfo'] instead
import type { WidgetInfo } from '~/api'

import type { TYPE_SATISFIED, Expect, StrictID } from '~/api/types/utils'

export type BackendPaths = paths
///////////////////////////////
///  TYPES
///////////////////////////////
type Schemas = components['schemas']

export type ProjectModel = Schemas['Project']
export type ReportModel = Schemas['ReportModel']
export type TestSuiteModel = Schemas['TestSuiteModel']

// TODO: fix this `WidgetInfo`
export type DashboardInfoModel = Omit<Schemas['DashboardInfoModel'], 'widgets'> & {
  widgets: WidgetInfo[]
}
export type VersionModel = Schemas['Version']
export type MetadataModel = ReportModel['metadata']

///////////////////////////////
///  EXTENDED TYPES FOR UI
///////////////////////////////

// TODO: add more DashboardPanel types
export type DashboardPanel =
  | DashboardPanelPlot
  | DashboardPanelCounter
  | DashboardPanelDistribution
  | DashboardPanelTestSuite
  | DashboardPanelTestSuiteCounter

export type DashboardPanelPlot = StrictID<
  Omit<Schemas['DashboardPanelPlot'], 'type'> & {
    type: 'evidently.ui.dashboards.reports.DashboardPanelPlot'
  }
>

export type DashboardPanelCounter = StrictID<
  Omit<Schemas['DashboardPanelCounter'], 'type'> & {
    type: 'evidently.ui.dashboards.reports.DashboardPanelCounter'
  }
>

export type DashboardPanelDistribution = StrictID<
  Omit<Schemas['DashboardPanelDistribution'], 'type'> & {
    type: 'evidently.ui.dashboards.reports.DashboardPanelDistribution'
  }
>

export type DashboardPanelTestSuite = StrictID<
  Omit<Schemas['DashboardPanelTestSuite'], 'type' | 'filter'> & {
    type: 'evidently.ui.dashboards.test_suites.DashboardPanelTestSuite'
    filter: Omit<Schemas['ReportFilter'], 'include_test_suites'> & {
      // this should always be true
      include_test_suites: true
    }
  }
>

export type DashboardPanelTestSuiteCounter = StrictID<
  Omit<Schemas['DashboardPanelTestSuiteCounter'], 'type' | 'filter'> & {
    type: 'evidently.ui.dashboards.test_suites.DashboardPanelTestSuiteCounter'
    filter: Omit<Schemas['ReportFilter'], 'include_test_suites'> & {
      // this should always be true
      include_test_suites: true
    }
  }
>

export type __EXTENDED_DASHBOARD_PANELS_TESTS_PASSED =
  | Expect<TYPE_SATISFIED<DashboardPanel, Schemas['DashboardPanel']>>
  | Expect<TYPE_SATISFIED<DashboardPanelPlot, Schemas['DashboardPanelPlot']>>
  | Expect<TYPE_SATISFIED<DashboardPanelCounter, Schemas['DashboardPanelCounter']>>
  | Expect<TYPE_SATISFIED<DashboardPanelDistribution, Schemas['DashboardPanelDistribution']>>
  | Expect<TYPE_SATISFIED<DashboardPanelTestSuite, Schemas['DashboardPanelTestSuite']>>
  | Expect<
      TYPE_SATISFIED<DashboardPanelTestSuiteCounter, Schemas['DashboardPanelTestSuiteCounter']>
    >
