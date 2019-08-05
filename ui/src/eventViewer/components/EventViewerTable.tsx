// Libraries
import React, {FC} from 'react'

// Components
import TableRow from 'src/eventViewer/components/TableRow'

// Types
import {ChildProps, FieldComponents} from 'src/eventViewer/types'

type Props = ChildProps & {
  fieldComponents: FieldComponents
}

const EventViewerTable: FC<Props> = ({state, fieldComponents}) => {
  return (
    <div className="event-viewer--rows">
      {state.rows.map((row, index) => (
        <TableRow key={index} row={row} fieldComponents={fieldComponents} />
      ))}
    </div>
  )
}

export default EventViewerTable
