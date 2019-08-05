// Types
import {ComponentType, Dispatch as ReactDispatch} from 'react'
import {RemoteDataState} from 'src/types'

export interface Row {
  [k: string]: any
}

export interface State {
  rows: Row[]

  // The last offset we used to load data
  offset: number

  // The definition of "now" when running queries that are relative to "now"
  now: number | null

  // Tracks the loading status of the next rows being loading
  nextRowsStatus: RemoteDataState

  // If the next rows failed to load, this field should contain a
  // human-friendly error message indicating why the rows failed to load
  nextRowsErrorMessage: string | null
}

export type Action =
  | {type: 'NEXT_ROWS_STATUS_CHANGED'; nextRowsStatus: RemoteDataState}
  | {type: 'NEXT_ROWS_LOADED'; rows: Row[]}
  | {type: 'NEXT_ROWS_FAILED_TO_LOAD'; errorMessage: string}

export type Dispatch = ReactDispatch<Action>

export type LoadRows = (options: LoadRowsOptions) => Promise<Row[]>

export interface LoadRowsOptions {
  offset: number
  limit: number
  now: number
  orderBy?: string
  since?: number
  until?: number
  filters?: Filter[]
}

export interface Filter {
  key: string
  value: string | number
  operation: FilterOperation
}

export type FilterOperation =
  | 'EQUALS'
  | 'NOT_EQUALS'
  | 'REG_MATCH'
  | 'NOT_REG_MATCH'

export interface ChildProps {
  state: State
  dispatch: Dispatch
  loadRows: LoadRows
}

export interface FieldComponents {
  [fieldName: string]: ComponentType<{row: Row}>
}
