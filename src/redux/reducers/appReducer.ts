import redux from 'redux'
import { AppState } from "../store"
import { AppReducerState } from "../../core/types"
import { BleError, BleManager, Device } from 'react-native-ble-plx'
import { resetReduxtData, setAllMeasurements, setAllServices, setDeviceData, setDisconnectedNotificationStatus, setFoundDevice, setIsConnected, setLocalstorageData, setMeasurements } from "./deviceReducer"
import { statusList } from '../../core/enums'
import { decodeDataFromBinary, delay } from '../../utils'
import storageApi from '../../localStorage'
import moment from 'moment'

const restore_state_identifier = 'manager';
const restore_state_function = async (restored_state: any) => {
  console.log('Restored State: ', restored_state);
  const connected_devices = await restored_state.connectedDevices();
  console.log('Connected Devices: ', connected_devices);
  // do what you need with the devices_connected
}

const manager = new BleManager({restoreStateIdentifier: restore_state_identifier, restoreStateFunction: restore_state_function})

let initialState: AppReducerState = {
    log: ['Viridis_v0.75'],
    appStatus: statusList.opened
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
                return {
                    ...state, log: [ ...state.log, `[${moment(new Date()).format("hh:mm:ss DD.MM.YY")}] ${action.logMessage}`]
                } 
            } else {
                return state
            }
        }
        case('SET_ERROR_MESSAGE'): {
            return {
                ...state, log: [...state.log, `[${moment(new Date()).format("hh:mm:ss DD.MM.YY")}] ${action.errorMessage}`]
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

export const scanDevices = () => async (dispatch: redux.Dispatch) => {
    dispatch(setStatus(statusList.isScanning))
    manager.startDeviceScan(null, null, (error: BleError | null, device: Device | null) => {
        dispatch(setLog('Scanning...'))
        if(device != null) dispatch(setFoundDevice(device))
        if (error) {
            dispatch(setError(error+''))
            dispatch(setStatus(statusList.geolocationError))
        }
        if (device && device.name?.toLowerCase().includes('viridis')){
            dispatch(setLog("Viridis Libre device was found"))
            dispatch(setDeviceData(device))
            dispatch(setIsConnected(true))
            manager.stopDeviceScan()
            dispatch(setStatus(statusList.deviceIsFound))
        }
    })
}

export const connectToDevice = (device: any, deviceStatus: number) => async (dispatch: redux.Dispatch) => {
    try {
        if (deviceStatus === statusList.deviceIsFound ) {
            dispatch(setStatus(statusList.isConnecting))
            await manager.connectToDevice(device.id)
        }
        dispatch(setLog("Viridis Libre device was connected"))
        await manager.discoverAllServicesAndCharacteristicsForDevice(device.id)
        dispatch(setLog('Permission for charachteristics was received'))
        let services = await manager.servicesForDevice(device.id)
        let characteristics = await getCharacteristics(services, device.id) 
        dispatch(setAllServices(characteristics))
        dispatch(setStatus(statusList.deviceIsConnected))
    } catch(error){
        dispatch(setError(error + ''))
        console.log(error + ' 404')
        await manager.cancelDeviceConnection(device.id)
        dispatch(setStatus(statusList.connectionError))
    } 
}

export const disconnectDevice = (device: any, deviceStatus: number) => async (dispatch: redux.Dispatch) => {
    await manager.cancelDeviceConnection(device.id)
    dispatch(setStatus(statusList.deviceIsDisconnected))
}

export const getAllCharachteristicsData = (deviceId: string, serviceUUID: string, mainCharacteristicUUID: string, characteristicUUID2: string) => async (dispatch: redux.Dispatch) => {
    try {
    dispatch(setStatus(statusList.isOnGetAllMeasurements))
    await storageApi.resetLocalStorageData()
    dispatch(resetReduxtData())
    let previousData: any = []
    const subscription = manager.monitorCharacteristicForDevice(deviceId,serviceUUID,mainCharacteristicUUID,
        (error, characteristic: any) => {
            if (error) {
                console.log(error)
                dispatch(setError(error + ' 407'))
            }
            let response = decodeDataFromBinary(characteristic.value)
            previousData.push(response)
            if (response.BaseTime === '0:0:0') {
                dispatch(setAllMeasurements(characteristic.value))
                dispatch(setLog("All measurements was received"))
                dispatch(setStatus(statusList.allMeasurementsWasReceived))
                storageApi.storeArrayDataInLocalStorage(previousData)
                return subscription.remove()
            }
            dispatch(setAllMeasurements(characteristic.value))
        }) 
    manager.monitorCharacteristicForDevice( deviceId, serviceUUID, characteristicUUID2,
        (error, characteristic: any) => {}) 
        await manager.writeCharacteristicWithResponseForDevice(deviceId, serviceUUID, characteristicUUID2, 'AQE=')  
    } catch (error) {
        dispatch(setError(error + ' 401'))
    }
}

export const getLastMeasurement = (deviceId: string, serviceUUID: string, mainCharacteristicUUID: string, characteristicUUID2: string, appStatus: number) => async (dispatch: redux.Dispatch) => {
    dispatch(setStatus(statusList.inLastDataFetching))
    try {
        const connection1 = manager.monitorCharacteristicForDevice(deviceId,serviceUUID,mainCharacteristicUUID,
            async (error, characteristic: any) => {
                if (error) {
                    connection1.remove()
                    connection2.remove()
                    dispatch(setError(error + ' 403'))
                    dispatch(setStatus(statusList.connectionError))
                    dispatch(setIsConnected(false))
                    dispatch(setDisconnectedNotificationStatus(true))
                }
                let response = decodeDataFromBinary(characteristic.value)
                storageApi.storeDataInLocalStorage(response)
                dispatch(setIsConnected(true))
                dispatch(setMeasurements(characteristic.value))
                let plainData = (decodeDataFromBinary(characteristic.value))
                dispatch(setLog(
                `new value: glucose: ${plainData.glucose}, sequenceNumber: ${plainData.SequenceNumber}, baseTime: ${plainData.SequenceNumber}, timeOffset: ${plainData.TimeOffset}`
                ))
            }) 
        const connection2 = manager.monitorCharacteristicForDevice( deviceId, serviceUUID, characteristicUUID2,
        (error, characteristic: any) => {})     
        
        while (appStatus === statusList.allMeasurementsWasReceived) {
            await manager.writeCharacteristicWithResponseForDevice(deviceId, serviceUUID, characteristicUUID2, 'AQY=')
            await delay(30000)
            }
    } catch (error) {
        dispatch(setError(error + ' 402'))
    }
}

const getCharacteristics = async (array: any, deviceId: string) => {
    let characteristicsAndServices = []
    for (let service of array) {
        delete service._manager
        let characteristics = await manager.characteristicsForDevice(deviceId, service.uuid)
        characteristicsAndServices.push({...service, characteristics: characteristics})
    }
    return characteristicsAndServices
}

export const errorHandler = (deviceId: any) => async (dispatch: redux.Dispatch) => {
    if (!await manager.isDeviceConnected(deviceId)) {
        dispatch(setStatus(statusList.deviceIsFound))
    } 
}

export const getLocalstorageData = () => async (dispatch: redux.Dispatch) => {
    const storageData = await storageApi.getDataFromLocalStorage()
    dispatch(setLocalstorageData(storageData))
    return
}

export const checkBluetoothStatus = () => async (dispatch: redux.Dispatch) => {
    const status = await manager.state()
    switch (status) {
        case 'Unknown': { 
            dispatch(setStatus(statusList.bluetoothError))
            dispatch(setLog('Error: The current state of the manager is unknown; an update is imminent'))
            break
    }
        case 'Resetting': { 
            dispatch(setStatus(statusList.bluetoothError))
            dispatch(setLog('Error: The connection with the system service was momentarily lost.'))
            break
    }
        case 'Unsupported': { 
            dispatch(setStatus(statusList.bluetoothError))
            dispatch(setLog('Error: The platform does not support Bluetooth low energy.'))
            break
    }
        case 'Unauthorized': { 
            dispatch(setStatus(statusList.bluetoothError))
            dispatch(setLog('Error: The app is not authorized to use Bluetooth low energy.'))
            break
    }
        case 'PoweredOff': { 
            dispatch(setStatus(statusList.bluetoothError))
            dispatch(setLog('Error:  Bluetooth is powered off.'))
            break
    }
        case 'PoweredOn': { 
            dispatch(setLog('Bluetooth is powered on.'))
            dispatch(setStatus(statusList.bluetoothIsEnabled))
            break
    }
        default: dispatch(setLog("Critical error: Can't get bluetooth status!"))
    }
}

export const waitBluetoothEnable = () => async (dispatch: redux.Dispatch) => {
    let status = await manager.state()
    while (status !== 'PoweredOn') {
        status = await manager.state()
        if (status == 'PoweredOn') {
            dispatch(setStatus(statusList.bluetoothIsEnabled))
        }
    }
}

export default appReducer