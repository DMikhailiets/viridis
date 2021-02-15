import {useState} from 'react'
import { AppState } from "../store"
import redux from 'redux'
import { AppReducerState } from "../../core/types"
import { BleError, BleManager, Device, Service } from 'react-native-ble-plx'
import { saveMeasurements, setAllMeasurements, setAllServices, setDeviceData, setFoundDevice, setMeasurements } from "./deviceReducer"
import { statuses } from '../../core/enums'

let counter = 0

let initialState: AppReducerState = {
    log: [],
    appStatus: statuses.opened
}
  
let appReducer = (state: AppState = initialState, action: any) => {
    switch(action.type) {
        case('SET_STATUS'): {
            return {
                ...state, appStatus: action.status
            }
        }
        case('SET_LOG_MESSAGE'): {
            if( state.log.length === 0 || (state.log[state.log.length -1] && !state.log[state.log.length -1].includes(action.logMessage))){
                let date = new Date()
                return {
                    ...state, log: [ ...state.log, `${date.getFullYear()}.${date.getMonth()}.${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${action.logMessage}`]
                } 
            } else {
                return state
            }
        }
        case('SET_ERROR_MESSAGE'): {
            let date = new Date()
            return {
                ...state, log: [...state.log, `${date.getFullYear()}.${date.getMonth()}.${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${action.errorMessage}`]
            }
        }
        case('SET_SERVICES_AND_CHARACTERISTICS'): {
            return state
        }
        default: 
            return state
    }
}

export const setStatus = ((status: number)=>({type: 'SET_STATUS', status}))
export const setLog = ((logMessage: string) => ({type: 'SET_LOG_MESSAGE', logMessage}))
export const setError = ((errorMessage: string) => ({type: 'SET_ERROR_MESSAGE', errorMessage}))

const manager = new BleManager()

export const scanDevices = () => async (dispatch: redux.Dispatch) => {
    dispatch(setStatus(statuses.isScanning))
    manager.startDeviceScan(null, null, (error: BleError | null, device: Device | null) => {
        dispatch(setLog('Scanning...'))
        if(device != null) dispatch(setFoundDevice(device))
        if (error) {
            dispatch(setError(error + ''))
        }
        if (device && device.name?.toLowerCase().includes('viridis')){
            dispatch(setLog("Viridis Libre device was found"))
            dispatch(setDeviceData(device))
            manager.stopDeviceScan()
            dispatch(setStatus(statuses.deviceIsFound))
        }
    });
}

export const connectToDevice = (device: any, deviceStatus: number) => async (dispatch: redux.Dispatch) => {
    debugger
    try {
        if (deviceStatus === statuses.deviceIsFound ){
            dispatch(setStatus(statuses.isConnecting))
            await manager.connectToDevice(device.id)
            dispatch(setStatus(statuses.deviceIsConnected))
        }
        dispatch(setLog("Viridis Libre device was connected"))
        await manager.discoverAllServicesAndCharacteristicsForDevice(device.id)
        dispatch(setLog('Permission for charachteristics was received'))
        let services = await manager.servicesForDevice(device.id)
        
        let characteristics = await getCharacteristics(services, device.id) 
        dispatch(setAllServices(characteristics))
        // getAllCharachteristicsData(device.id, "00001808-0000-1000-8000-00805f9b34fb", "00002a18-0000-1000-8000-00805f9b34fb", "00002a52-0000-1000-8000-00805f9b34fb")
        //debugger
        //await getCharachteristicsData(device.id, "00001808-0000-1000-8000-00805f9b34fb", "00002a18-0000-1000-8000-00805f9b34fb", "00002a52-0000-1000-8000-00805f9b34fb")
        //debugger
        // while(true){
        //         await getCharachteristicsData(device.id, "00001808-0000-1000-8000-00805f9b34fb", "00002a18-0000-1000-8000-00805f9b34fb", "00002a52-0000-1000-8000-00805f9b34fb", dispatch)
        //         await delay(5000)
        // }
    } catch(error){
        dispatch(setError(error + ''))
        await manager.cancelDeviceConnection(device.id)
        dispatch(setStatus(statuses.connectionError))
    } finally {
        //dispatch(setConnectedToViridis(false))
        dispatch(setStatus(statuses.inFinaly))
        // await manager.cancelDeviceConnection(device.id)
    }
}

export const disconnectDevice = (device: any, deviceStatus: number) => async (dispatch: redux.Dispatch) => {
    await manager.cancelDeviceConnection(device.id)
    dispatch(setStatus(statuses.deviceIsDisconnected))
}
// export const connectAndGetGlucoseValue = (device: any) => async (dispatch: redux.Dispatch) => {
//     debugger
//     dispatch(setConnectedToViridis(true))
//     try {
//         debugger
//         //await manager.connectToDevice(device.id)
//         dispatch(setLog("Viridis Libre A device was connected!)"))
//         const getCharachteristicsData = async (deviceId: string, serviceUUID: string, mainCharacteristicUUID: string, characteristicUUID2: string) => {
//         manager.monitorCharacteristicForDevice(deviceId,serviceUUID,mainCharacteristicUUID,
//             (error, characteristic: any) => {
//                 dispatch(setMeasurements(characteristic.value))
//             }) 
//             let data = await manager.writeCharacteristicWithResponseForDevice(deviceId, serviceUUID, characteristicUUID2, binaryArrayToBase64())
//             debugger
//         }
//             await getCharachteristicsData(device.id, "00001808-0000-1000-8000-00805f9b34fb", "00002a18-0000-1000-8000-00805f9b34fb", "00002a52-0000-1000-8000-00805f9b34fb")
//     } catch(error){
//         dispatch(setError(error + ''))
//     } finally {
//         //manager.cancelDeviceConnection(device.id)
//         //dispatch(setConnectedToViridis(false))
//     }
// }

export const getAllCharachteristicsData = (deviceId: string, serviceUUID: string, mainCharacteristicUUID: string, characteristicUUID2: string) => async (dispatch: redux.Dispatch) => {
    dispatch(setStatus(statuses.isOnGetAllMeasurements))
    manager.monitorCharacteristicForDevice(deviceId,serviceUUID,mainCharacteristicUUID,
        (error, characteristic: any) => {
            if (error) {
                console.log(error)
            }
            debugger
            dispatch(setAllMeasurements(characteristic.value))
            counter++
        }) 
    manager.monitorCharacteristicForDevice( deviceId, serviceUUID, characteristicUUID2,
        (error, characteristic: any) => {})     
        await manager.writeCharacteristicWithResponseForDevice(deviceId, serviceUUID, characteristicUUID2, 'AQE=')    
}

const getCharachteristicsData = async (deviceId: string, serviceUUID: string, mainCharacteristicUUID: string, characteristicUUID2: string, dispatch: redux.Dispatch) => {
    manager.monitorCharacteristicForDevice(deviceId,serviceUUID,mainCharacteristicUUID,
        (error, characteristic: any) => {
            if(counter > 31){   
            dispatch(setMeasurements(characteristic.value))
            dispatch(saveMeasurements(characteristic.value))
            }
        
            //dispatch(setLog('Listening'))
            //debugger
        }) 
    manager.monitorCharacteristicForDevice( deviceId, serviceUUID, characteristicUUID2,
    (error, characteristic: any) => {})     
    await manager.writeCharacteristicWithResponseForDevice(deviceId, serviceUUID, characteristicUUID2, 'AQY=')
    
}

const getCharacteristics = async (array: any, deviceId: string) => {
    let characteristicsAndServices = []
    for (let service of array) {
        delete service._manager
        let characteristics = await manager.characteristicsForDevice(deviceId, service.uuid)
        characteristicsAndServices.push({...service, characteristics: characteristics})
    }
    //dispatch(setAllServices(characteristicsAndServices))
    return characteristicsAndServices
}

let delay = (ms: number) => {
    return new Promise((resolve: Function) => setTimeout(() => {
        resolve()
        }, ms
    ))
}

export default appReducer