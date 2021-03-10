import { AppState } from "../store"
import redux from 'redux'
import { Device } from "react-native-ble-plx"
import { DeviceReducerState} from "../../core/types"
import { decodeDataFromBinary } from "../../utils"

let initialState: DeviceReducerState = {
    device: null,
    scannedDevicesList: [],
    currentValue: null,
    notifications: {
        criticalValue: false,
        disconnected: false
    },
    allMeasurements:[],
    average: 0
}

let deviceReducer = (state: AppState = initialState, action: any) => {
    //debugger
    switch(action.type) {
        case('SET_FOUND_DEVICE'): {
            if(state.scannedDevicesList.every((device: Device) => device.id != action.device.id)){
                delete action.device._manager
                return {
                    ...state, scannedDevicesList: [...state.scannedDevicesList, action.device] //Ble devie это не мой Type Device, поэтому нужно правльно извлечь параметры 
                }
            } else {
                return state
            }
        }
        case('SET_DEVICE_DATA'): {
            return {
                ...state, device: action.deviceData
            }
        }
        case('SET_ALL_SERVICES_AND_CHARACTERISTICS'): {
            
            return {
                ...state, device: {
                    ...state.device,
                    allServices: action.allServices
                }
            }
        }
        case('SET_CRITICAL_VALUE_NOTIFICATION_STATUS'): {
            return {
                ...state, notifications: {
                    ...state.notifications,
                    criticalValue: true,
                }
        }
        case('SET_DISCONNECTED_NOTIFICATION_STATUS'): {
            debugger
            return {
                ...state, notifications: {
                    ...state.notifications,
                    disconnected: action.status
                }
            }
        }
        case('SET_ALL_MEASUREMENTS'): {
            let measurement = decodeDataFromBinary(action.allMeasurements)
            if(state.allMeasurements.length === 0 || (state.allMeasurements[state.allMeasurements.length -1] && state.allMeasurements[state.allMeasurements.length -1].value !== measurement.glucose)){
                return {
                    ...state, allMeasurements: [...state.allMeasurements, measurement]
                }
            } else return state
        }
        case('SET_MEASUREMENTS'): {
            let measurement = decodeDataFromBinary(action.measurement)
            //debugger
            if(state.allMeasurements[state.allMeasurements.length -1].SequenceNumber !== measurement.SequenceNumber){
                //debugger
                if ( parseFloat(measurement.glucose) > 7) {
                    return {
                        ...state, notifications: {
                            ...state.notifications,
                            criticalValue: true,
                            
                        },
                        allMeasurements: [...state.allMeasurements, measurement]
                    }
                }
                return {
                    ...state, allMeasurements: [...state.allMeasurements, measurement]
                }                
            } else return state
        }   
        case ('RESET_REDUX_DATA'): {
            return {
                ...state, currentValue: [], allMeasurements: []
            }
        }
        case 'SET_LOCALSTORAGE_DATA': {
            return {
                ...state,
                allMeasurements: [...action.data]
            }
        }     
        default:{
            return state 
        }
            
    }
}
export const setAllMeasurements = ((allMeasurements: any) => ({type: 'SET_ALL_MEASUREMENTS', allMeasurements}))
export const setCriticalValueNotificationStatus = ((status: boolean) => ({type: 'SET_CRITICAL_VALUE_NOTIFICATION_STATUS', status})) 
export const setDisconnectedNotificationStatus = ((status: boolean) => ({type: 'SET_DISCONNECTED_NOTIFICATION_STATUS', status}))
export const setDeviceData = ((deviceData: Device) => ({type: 'SET_DEVICE_DATA', deviceData}))
export const setFoundDevice = ((device: Device) => ({type: 'SET_FOUND_DEVICE', device}))
export const setAllServices = ((allServices: any) => ({type: 'SET_ALL_SERVICES_AND_CHARACTERISTICS', allServices}))
export const setMeasurements = ((measurement: any) => ({type: 'SET_MEASUREMENTS', measurement}))
export const resetReduxtData = (() => ({type: 'RESET_REDUX_DATA'}))
export const setLocalstorageData = ((data: Array<Object>) => ({type: 'SET_LOCALSTORAGE_DATA', data}))

export const saveMeasurements = (data: any) => async (dispatch: redux.Dispatch) => {
    let measurement = decodeDataFromBinary(data)
    await storeDataInLocalStorage(measurement)
    const response = await getDataFromLocalStorage()
    console.log(response)
}

export const resetMeasurementsDataFromLocalstorage = () => async () => {
    await resetLocalStorageData()
}

export const resetMeasurementsDataFromRedux = () => async (dispatch: redux.Dispatch) => {
    dispatch(resetReduxtData())
}

export const resetAllMeasurementsData = () => async (dispatch: redux.Dispatch) => {
    await resetLocalStorageData()
    dispatch(resetReduxtData())
}

export default deviceReducer