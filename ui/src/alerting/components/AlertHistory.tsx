// Libraries
import React, {FC} from 'react'

// Components
import EventViewer from 'src/eventViewer/components/EventViewer'
import EventTable from 'src/eventViewer/components/EventTable'
import StatusField from 'src/alerting/components/StatusField'
import TagsField from 'src/alerting/components/TagsField'

// Utils
import {fakeLoadRows} from 'src/eventViewer/utils/fakeLoadRows'

// Types
import {FieldComponents} from 'src/eventViewer/types'

const FIELD_COMPONENTS: FieldComponents = {
  time: ({row}) => <>{new Date(row.time).toLocaleTimeString()}</>,
  status: StatusField,
  tags: TagsField,
}

const FIELD_WIDTHS = {
  time: 100,
  message: 300,
  status: 50,
  tags: 300,
}

interface Props {}

const AlertHistory: FC<Props> = ({}) => {
  return (
    <div className="alert-history">
      <EventViewer loadRows={fakeLoadRows}>
        {props => (
          <EventTable
            {...props}
            fields={['time', 'status', 'message', 'tags']}
            fieldWidths={FIELD_WIDTHS}
            fieldComponents={FIELD_COMPONENTS}
          />
        )}
      </EventViewer>
    </div>
  )
}

export default AlertHistory
