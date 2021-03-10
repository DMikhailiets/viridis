import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { connectToDevice, getAllCharachteristicsData, scanDevices, getLastMeasurement, errorHandler, getLocalstorageData, checkBluetoothStatus, waitBluetoothEnable } from '../../../redux/reducers/appReducer'
import { fetchAppData, fetchAverage, fetchDeviceData, fetchMeasurements, fetchScannedDevicesList } from '../../../redux/selectors'
import { AppState } from '../../../redux/store'
import MainScreenComponent from '../component/mainScreen'
import { statusList } from '../../../core/enums'
import { fetchCurrentValue } from '../../../redux/selectors/deviceSelector'
let MainScreenContainer: React.FC<any> = (
    { 
        deviceData, 
        appData,
        measurements,
        scannedDevicesList,
        scanDevices,
        getAllCharachteristicsData,
        connectToDevice,
        average,
        getLastMeasurement,
        errorHandler,
        getLocalstorageData,
        checkBluetoothStatus,
        waitBluetoothEnable,
        currentValue,
    }) => {
    
    useEffect(() => {
        switch (appData.appStatus) {
            case statusList.opened: {
                getLocalstorageData()
                checkBluetoothStatus()
                // scanDevices()
                break
            }
            case statusList.bluetoothIsEnabled: {
                //getLocalstorageData()
                // checkBluetoothStatus()
                scanDevices()
                break
            }
            case statusList.deviceIsFound: {
                connectToDevice(deviceData, appData.appStatus)
                break
            }
            case statusList.deviceIsConnected: {
                getAllCharachteristicsData(deviceData.id, "00001808-0000-1000-8000-00805f9b34fb", "00002a18-0000-1000-8000-00805f9b34fb", "00002a52-0000-1000-8000-00805f9b34fb")
                break
            }
            case statusList.allMeasurementsWasReceived: {
                getLastMeasurement(deviceData.id, "00001808-0000-1000-8000-00805f9b34fb", "00002a18-0000-1000-8000-00805f9b34fb", "00002a52-0000-1000-8000-00805f9b34fb", appData.appStatus)
                break
            } 
            case statusList.connectionError: {
                errorHandler(deviceData.id, appData.appStatus)
                break
            }
            case statusList.bluetoothError: {
                waitBluetoothEnable()
                break
            }
            // case statusList.geolocationError: {
            //     connectionErrorHandler(appData.appStatus)
            //     break
            // }
            default: break 
        }
      },[deviceData, appData.appStatus])
    
    return <MainScreenComponent
                measurements={measurements} 
                deviceData={deviceData}
                scannedDevicesList={scannedDevicesList}
                appData={appData}
                average={average}
                currentValue={currentValue}
            />
} 

export default connect(
    (state: AppState) => ({
        deviceData: fetchDeviceData(state),
        scannedDevicesList: fetchScannedDevicesList(state),
        appData: fetchAppData(state),
        measurements: fetchMeasurements(state),
        average: fetchAverage(state),
        currentValue: fetchCurrentValue(state)
    }), {
        scanDevices,
        connectToDevice,
        getAllCharachteristicsData,
        getLastMeasurement,
        errorHandler,
        getLocalstorageData,
        checkBluetoothStatus,
        waitBluetoothEnable,
    }
    )
(MainScreenContainer)
