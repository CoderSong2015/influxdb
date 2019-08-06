// Libraries
import React, {FC} from 'react'

interface Props {
  row: {tags: {[tagKey: string]: string}}
}

const TagsField: FC<Props> = ({row: {tags}}) => {
  return (
    <div className="tags-field">
      {Object.keys(tags).map(key => (
        <div className="tags-field--tag">
          <span className="tags-field--key">{key}</span>=
          <span className="tags-field--value">{tags[key]}</span>
        </div>
      ))}
    </div>
  )
}

export default TagsField
