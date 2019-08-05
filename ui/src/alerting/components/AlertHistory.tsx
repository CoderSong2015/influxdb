// Libraries
import React, {FC} from 'react'

// Components
import EventViewer from 'src/eventViewer/components/EventViewer'
import EventViewerTable from 'src/eventViewer/components/EventViewerTable'

// Utils
import {fakeLoadRows} from 'src/eventViewer/utils/fakeLoadRows'

// Types
import {FieldComponents} from 'src/eventViewer/types'

const FIELD_COMPONENTS: FieldComponents = {
  time: ({row}) => <>{new Date(row.time).toISOString()}</>,
}

interface Props {}

const AlertHistory: FC<Props> = ({}) => {
  return (
    <EventViewer loadRows={fakeLoadRows}>
      {props => (
        <EventViewerTable {...props} fieldComponents={FIELD_COMPONENTS} />
      )}
    </EventViewer>
  )
}

export default AlertHistory
