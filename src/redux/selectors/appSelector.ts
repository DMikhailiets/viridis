import { AppReducerState } from './../../core/types';
import { AppState } from './../store'
import { createSelector } from 'reselect'
import {  } from '../../core/types'

export const fetchAppData = createSelector((state: AppState) => state.appReducer,((appData: AppReducerState) => appData))
