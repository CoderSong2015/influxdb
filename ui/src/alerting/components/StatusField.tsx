// Libraries
import React, {FC} from 'react'

interface Props {
  row: {status: string}
}

const StatusField: FC<Props> = ({row: {status}}) => {
  return (
    <div className={`status-field status-field--${status.toLowerCase()}`}>
      {status}
    </div>
  )
}

export default StatusField
