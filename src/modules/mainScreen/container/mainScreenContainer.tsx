import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { MainScreenContainerPropsType } from '../../../core/types'
import { changeIsSearching } from '../../../redux/reducers'
import { connectAndGetServicesAndCharacteristics, getAllCharachteristicsData, scanDevices } from '../../../redux/reducers/appReducer'
import { fetchAppData, fetchAverage, fetchDeviceData, fetchMeasurements, fetchScannedDevicesList } from '../../../redux/selectors'
import { AppState } from '../../../redux/store'
import MainScreenComponent from '../component/mainScreen'

let MainScreenContainer: React.FC<any> = (
    { 
        deviceData, 
        appData,
        measurements,
        scannedDevicesList,
        scanDevices,
        getAllCharachteristicsData,
        connectToViridis,
        getServices,
        connectAndGetServicesAndCharacteristics,
        average
    }) => {
    
    useEffect(() => {
        if(deviceData === null && !appData.isScanning) {
            scanDevices()
        }
        if(deviceData && appData.connectedToViridis === false && !appData.onConnection){
            debugger
            connectAndGetServicesAndCharacteristics(deviceData, appData.connectedToViridis)
        }
        if(deviceData && deviceData.id && appData.connectedToViridis === true && !appData.isOnGetAllMeasurements){
            debugger
            getAllCharachteristicsData(deviceData.id, "00001808-0000-1000-8000-00805f9b34fb", "00002a18-0000-1000-8000-00805f9b34fb", "00002a52-0000-1000-8000-00805f9b34fb")
        }
        
      },[deviceData, appData.isScanning, appData.connectedToViridis])
    
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
        connectAndGetServicesAndCharacteristics,
        getAllCharachteristicsData
    }
    )
(MainScreenContainer)
