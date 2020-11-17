import { AppState } from './../store'
import { createSelector } from 'reselect'

export const fetchLogData = createSelector((state: AppState) => state.appReducer.log, (logData: any) => logData)