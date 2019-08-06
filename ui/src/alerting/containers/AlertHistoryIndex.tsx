// Libraries
import React, {FC} from 'react'
import {Page} from '@influxdata/clockface'

// Components
import AlertHistory from 'src/alerting/components/AlertHistory'

const AlertHistoryIndex: FC = () => {
  return (
    <Page
      titleTag="Alert History | InfluxDB 2.0"
      className="alert-history-page"
    >
      <Page.Header fullWidth={true}>
        <Page.Title title="Alert History" />
      </Page.Header>
      <Page.Contents fullWidth={true} fullHeight={true} scrollable={false}>
        <AlertHistory />
      </Page.Contents>
    </Page>
  )
}

export default AlertHistoryIndex
