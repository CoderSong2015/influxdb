// Libraries
import React, {useCallback, FC} from 'react'
import {AutoSizer, InfiniteLoader, List} from 'react-virtualized'

// Components
import TableRow from 'src/eventViewer/components/TableRow'
import LoadingRow from 'src/eventViewer/components/LoadingRow'
import Header from 'src/eventViewer/components/Header'

// Utils
import {loadNextRows} from 'src/eventViewer/components/EventViewer.reducer'

// Constants
import {ROW_HEIGHT, LIMIT} from 'src/eventViewer/constants'

// Types
import {ChildProps, FieldComponents} from 'src/eventViewer/types'

type Props = ChildProps & {
  fields: string[]
  fieldWidths: {[field: string]: number}
  fieldComponents: FieldComponents
}

const EventTable: FC<Props> = ({
  state,
  dispatch,
  loadRows,
  fields,
  fieldWidths,
  fieldComponents,
}) => {
  const rowCount = state.rows.length + LIMIT

  const isRowLoaded = ({index}) => !!state.rows[index]

  const rowRenderer = useCallback(
    ({key, index, style}) => {
      const row = state.rows[index]

      if (!row) {
        return <LoadingRow key={key} index={index} style={style} />
      }

      return (
        <TableRow
          key={key}
          style={style}
          row={row}
          fields={fields}
          fieldWidths={fieldWidths}
          fieldComponents={fieldComponents}
        />
      )
    },
    [state, fieldComponents]
  )

  return (
    <AutoSizer className="event-table">
      {({width, height}) => {
        if (!width || !height) {
          return null
        }

        return (
          <>
            <Header
              fields={fields}
              fieldWidths={fieldWidths}
              style={{width: `${width}px`}}
            />
            <InfiniteLoader
              isRowLoaded={isRowLoaded}
              loadMoreRows={() => loadNextRows(state, dispatch, loadRows)}
              rowCount={rowCount}
            >
              {({onRowsRendered, registerChild}) => (
                <List
                  width={width}
                  height={height}
                  ref={registerChild}
                  onRowsRendered={onRowsRendered}
                  rowCount={rowCount}
                  rowHeight={ROW_HEIGHT}
                  rowRenderer={rowRenderer}
                  overscanRowCount={20}
                />
              )}
            </InfiniteLoader>
          </>
        )
      }}
    </AutoSizer>
  )
}

export default EventTable
