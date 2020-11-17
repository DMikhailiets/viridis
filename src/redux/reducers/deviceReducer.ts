import { fetchScannedDevicesList } from './../selectors/deviceSelector';
import { AppState } from "../store"
import redux from 'redux'
import { Device } from "react-native-ble-plx"
import { DeviceReducerState, MDevice } from "../../core/types"
import { base64ToBinaryArray, generateId, getFullByte, getInAdditionalCode } from '../../utils';
import axios from "axios"

let push = 0

let initialState: DeviceReducerState = {
    device: null,
    scannedDevicesList: [],
    currentValue: [],
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
                ...state, ...state.notifications.criticalValue = action.status
            }
        }
        case('SET_DISCONNECTED_NOTIFICATION_STATUS'): {
            return {
                ...state, ...state.notifications.criticalValue = action.status
            }
        }
        case('SET_ALL_MEASUREMENTS'): {
            let data = base64ToBinaryArray(action.allMeasurements)
            let glucoseValueBytes = getFullByte(data[13].toString(2)) + getFullByte(data[12].toString(2))
            let exp = getInAdditionalCode(glucoseValueBytes.slice(0,4))
            let mantisa =  glucoseValueBytes.slice(4)
            let glucose =  (parseInt(mantisa, 2) * (10**exp)).toFixed(2) 
            let date = new Date()
            if(state.allMeasurements.length === 0 || (state.allMeasurements[state.allMeasurements.length -1] && state.allMeasurements[state.allMeasurements.length -1].value !== glucose)){
                return {
                    ...state, allMeasurements: [...state.allMeasurements, {
                        date: `${date.getFullYear()}.${date.getMonth()}.${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
                        value: glucose,
                        id: generateId()+ glucose + date.getMilliseconds()
                    }]
                }
            } else return state
        }
        case('SET_MEASUREMENTS'): {
            let data = base64ToBinaryArray(action.measurement)
            let glucoseValueBytes = getFullByte(data[13].toString(2)) + getFullByte(data[12].toString(2))
            let exp = getInAdditionalCode(glucoseValueBytes.slice(0,4))
            let mantisa =  glucoseValueBytes.slice(4)
            let glucose =  (parseInt(mantisa, 2) * (10**exp)).toFixed(2) 
            //debugger
            let date = new Date()
            if(state.currentValue.length === 0 || (state.currentValue[state.currentValue.length -1] && state.currentValue[state.currentValue.length -1].value !== glucose)){
                if ( parseFloat(glucose) > 7 && push < 1) {
                     push = push + 1
                    return {
                        ...state, notifications: {
                            ...state.notifications,
                            criticalValue: true
                        }
                    }
                }
                return {
                    ...state, currentValue: [...state.currentValue, {
                        date: `${date.getFullYear()}.${date.getMonth()}.${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
                        value: glucose
                    }]
                }                
            } else return state
        }        
        default:{
            //debugger
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

export default deviceReducer