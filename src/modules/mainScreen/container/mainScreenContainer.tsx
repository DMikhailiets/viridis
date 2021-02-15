import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { connectToDevice, getAllCharachteristicsData, scanDevices } from '../../../redux/reducers/appReducer'
import { fetchAppData, fetchAverage, fetchDeviceData, fetchMeasurements, fetchScannedDevicesList } from '../../../redux/selectors'
import { AppState } from '../../../redux/store'
import MainScreenComponent from '../component/mainScreen'
import { statuses } from '../../../core/enums'

let MainScreenContainer: React.FC<any> = (
    { 
        deviceData, 
        appData,
        measurements,
        scannedDevicesList,
        scanDevices,
        getAllCharachteristicsData,
        connectToDevice,
        average
    }) => {
    
    useEffect(() => {
        if(appData.appStatus === statuses.opened) {
            scanDevices()
        }
        debugger
        if(appData.appStatus === statuses.deviceIsFound){
            debugger
            connectToDevice(deviceData, appData.appStatus)
        }
        if(deviceData && deviceData.id && appData.connectedToViridis === true && !appData.isOnGetAllMeasurements){
            debugger
            getAllCharachteristicsData(deviceData.id, "00001808-0000-1000-8000-00805f9b34fb", "00002a18-0000-1000-8000-00805f9b34fb", "00002a52-0000-1000-8000-00805f9b34fb")
        }
        
      },[deviceData, appData.appStatus])
    
    return <MainScreenComponent
                measurements={measurements} 
                deviceData={deviceData}
                scannedDevicesList={scannedDevicesList}
                appData={appData}
                average={average}
            />
} 

export default connect(
    (state: AppState) => ({
        deviceData: fetchDeviceData(state),
        scannedDevicesList: fetchScannedDevicesList(state),
        appData: fetchAppData(state),
        measurements: fetchMeasurements(state),
        average: fetchAverage(state)
    }), {
        scanDevices,
        connectToDevice,
        getAllCharachteristicsData
    }
    )
(MainScreenContainer)
