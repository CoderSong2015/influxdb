import React, {CSSProperties, FC} from 'react'

interface Props {
  style: CSSProperties
  fields: string[]
  fieldWidths: {[field: string]: number}
}

const Header: FC<Props> = ({style, fields, fieldWidths}) => {
  return (
    <div className="event-table-header" style={style}>
      {fields.map(field => {
        const style = {flexBasis: `${fieldWidths[field]}px`}

        return (
          <div key={field} className="event-table-header--field" style={style}>
            {field}
          </div>
        )
      })}
    </div>
  )
}

export default Header
