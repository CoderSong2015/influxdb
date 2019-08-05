// Libraries
import React, {FC} from 'react'
import {Page} from '@influxdata/clockface'

// Components
import AlertHistory from 'src/alerting/components/AlertHistory'

const AlertHistoryIndex: FC = () => {
  return (
    <Page titleTag="Alert History | InfluxDB 2.0">
      <Page.Header fullWidth={true}>
        <Page.Title title="Alert History" />
      </Page.Header>
      <Page.Contents fullWidth={true}>
        <AlertHistory />
      </Page.Contents>
    </Page>
  )
}

export default AlertHistoryIndex
