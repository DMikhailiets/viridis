import { AppState } from './../store'
import { createSelector } from 'reselect'
import { MDevice } from '../../core/types'

export const fetchDeviceData = createSelector((state: AppState) => state.deviceReducer.device, (device: MDevice) => device)
export const fetchScannedDevicesList = createSelector((state: AppState) => state.deviceReducer.scannedDevicesList, (scannedDevicesList: MDevice[]) => scannedDevicesList)
export const fetchMeasurements = createSelector((state: AppState) => state.deviceReducer.currentValue, (currentValue: any) => currentValue)
export const fetchAllMeasurements = createSelector((state: AppState) => state.deviceReducer.allMeasurements, (allMeasurements: any) => allMeasurements)
export const fetchAverage = createSelector((state: AppState) => state.deviceReducer.average, (average: any) => average)
export const fetchNotificationsStatus = createSelector((state: AppState) => state.deviceReducer.notifications, (notifications: any) => notifications)
export const fetchCurrentValue = createSelector((state: AppState) => state.deviceReducer.allMeasurements, (allMeasurements: any) => allMeasurements.slice(-2))
export const fetchIsConnected = createSelector((state: AppState) => state.deviceReducer.isConnected, (isConnected: boolean) => isConnected)