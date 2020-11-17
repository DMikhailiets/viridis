import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { MainScreenContainerPropsType } from '../../../core/types'
import { changeIsSearching } from '../../../redux/reducers'
import { connectAndGetServicesAndCharacteristics, scanDevices } from '../../../redux/reducers/appReducer'
import { fetchAppData, fetchAverage, fetchDeviceData, fetchMeasurements, fetchScannedDevicesList } from '../../../redux/selectors'
import { AppState } from '../../../redux/store'
import MainScreenComponent from '../component/mainScreen'

let MainScreenContainer: React.FC<MainScreenContainerPropsType> = (
    { 
        deviceData, 
        appData,
        measurements,
        scannedDevicesList,
        scanDevices,
        connectToViridis,
        getServices,
        connectAndGetServicesAndCharacteristics,
        average
    }) => {
    
    useEffect(() => {
        if(deviceData === null && !appData.isScanning) {
            scanDevices()
        }
        if(deviceData && appData.connectedToViridis === false){
            connectAndGetServicesAndCharacteristics(deviceData, appData.connectedToViridis)
        }
        // if(appData.connectedToViridis === true){
        //     debugger
        //     getServices(getServices)
        // }
        
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
    }
    )
(MainScreenContainer)
