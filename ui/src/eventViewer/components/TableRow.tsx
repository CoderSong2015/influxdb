import React, {FC} from 'react'

import {Row, FieldComponents} from 'src/eventViewer/types'

interface Props {
  row: Row
  fieldComponents: FieldComponents
}

const TableRow: FC<Props> = ({row, fieldComponents}) => {
  return (
    <div className="event-viewer-row">
      {Object.keys(row).map(field => {
        const Component = fieldComponents[field]

        if (Component) {
          return (
            <div key={field} className="event-viewer-row--field">
              <Component key={field} row={row} />
            </div>
          )
        }

        return (
          <div key={field} className="event-viewer-row--field">
            {row[field]}
          </div>
        )
      })}
    </div>
  )
}

export default TableRow
