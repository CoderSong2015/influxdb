// Constants
import {LIMIT} from 'src/eventViewer/constants'

// Types
import {RemoteDataState} from 'src/types'
import {State, Action, Dispatch, LoadRows} from 'src/eventViewer/types'

export const INITIAL_STATE: State = {
  rows: [],
  offset: 0,
  now: null,
  nextRowsStatus: RemoteDataState.NotStarted,
  nextRowsErrorMessage: null,
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'NEXT_ROWS_STATUS_CHANGED': {
      return {...state, nextRowsStatus: action.nextRowsStatus}
    }

    case 'NEXT_ROWS_FAILED_TO_LOAD': {
      return {
        ...state,
        nextRowsStatus: RemoteDataState.Error,
        nextRowsErrorMessage: action.errorMessage,
      }
    }

    case 'NEXT_ROWS_LOADED': {
      return {
        ...state,
        rows: [...state.rows, ...action.rows],
        nextRowsStatus: RemoteDataState.Done,
      }
    }

    default: {
      const neverAction: never = action

      throw new Error(`unhandled action "${(neverAction as any).type}"`)
    }
  }
}

export const loadNextRows = async (
  state: State,
  dispatch: Dispatch,
  loadRows: LoadRows
) => {
  if (state.nextRowsStatus === RemoteDataState.Loading) {
    return
  }

  dispatch({
    type: 'NEXT_ROWS_STATUS_CHANGED',
    nextRowsStatus: RemoteDataState.Loading,
  })

  try {
    const rows = await loadRows({
      offset: state.offset,
      limit: LIMIT,
      now: state.now,
    })

    dispatch({type: 'NEXT_ROWS_LOADED', rows})
  } catch (error) {
    dispatch({type: 'NEXT_ROWS_FAILED_TO_LOAD', errorMessage: error.message})
  }
}
