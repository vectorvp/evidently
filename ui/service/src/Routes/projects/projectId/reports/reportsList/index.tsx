import { ActionsErrorSnackbar, GenericErrorBoundary } from 'evidently-ui-lib/components/Error'
import { RouteObject } from 'evidently-ui-lib/shared-dependencies/react-router-dom'
import { injectReportsAPI } from 'evidently-ui-lib/routes-components/snapshots/data'
import { projectProvider } from '~/api'

const { loader, action } = injectReportsAPI({ api: projectProvider })

export default {
  index: true,
  lazy: async () => {
    const { SnapshotsListTemplate, ...rest } = await import(
      'evidently-ui-lib/routes-components/snapshots'
    )

    const Component = () => (
      <>
        <ActionsErrorSnackbar />
        <SnapshotsListTemplate type="reports" />
      </>
    )

    return { ...rest, Component }
  },
  loader,
  action,
  ErrorBoundary: GenericErrorBoundary
} satisfies RouteObject
