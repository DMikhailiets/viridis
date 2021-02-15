import { Device } from "react-native-ble-plx"

export type MDevice = {
    "id":  string | null,
    "isConnectable": boolean | null,
    "localName":  string | null,
    "manufacturerData":  string | null,
    "mtu":  number | null,
    "name":  string | null,
    "overflowServiceUUIDs":  string | null,
    "rssi":  number | null,
    "serviceData":  any,
    "serviceUUIDs":  any,
    "solicitedServiceUUIDs":  any,
    "txPowerLevel":  any,
    "servicesAndCharacteristics": any | null,
    "allServices": any
} | null

export type DeviceReducerState = {
    device: Device | null,
    scannedDevicesList: MDevice[] | [],
    currentValue: any,
    allMeasurements: Array<any>,
    average: number,
    notifications: {
        criticalValue: false,
        disconnected: false
    },
    //servicesAndCharacteristics: any
}

export type AppReducerState = {
    isOnGetAllMeasurements: boolean
    onConnection: boolean
    log: [],
    isScanning: boolean,
    connectedToViridis: boolean,
}

export type MainScreenContainerPropsType = {
    measurements: []
    deviceData: MDevice
    scannedDevicesList: MDevice[] 
    scanDevices: Function
    appData: AppReducerState
    connectToViridis: Function
    getServices: Function
    connectAndGetServicesAndCharacteristics: Function
    average: number
    //getCharacteristics: Function
}

export type MainScreenComponentPropsType = {
    measurements: [] ,
    deviceData: MDevice
    scannedDevicesList: MDevice[]
    appData: AppReducerState
    average: number
}


// {
   
//      "id":  "1C:AD:42:30:47:F9",
//      "isConnectable":  null,
//      "localName":  null,
//      "manufacturerData":  "BgABCSEKFBrL/NDoREVTS1RPUC02TDM1TEEz",
//      "mtu":  23,
//      "name":  null,
//      "overflowServiceUUIDs":  null,
//      "rssi":  -77,
//      "serviceData":  null,
//      "serviceUUIDs":  null,
//      "solicitedServiceUUIDs":  null,
//      "txPowerLevel":  null
// }

export type DebugContainerPropsType = {
    log: Array<any>
}

export type DebugComponentPropsType = {
    log: Array<any>,
    resetMeasurementsDataFromRedux: Function
    resetAllMeasurementsData: Function
    resetMeasurementsDataFromLocalstorage: Function
}

export type NotificationContainerPropsType = {
    notifications: any,
    setDisconnectedNotificationStatus: Function,
    setCriticalValueNotificationStatus: Function
}

export type NotificationComponentPropsType = {
    criticalValue: boolean,
    disconnected: boolean
    setDisconnectedNotificationStatus: Function,
    setCriticalValueNotificationStatus: Function
}

export type ChartComponentsPropsType = {
    allMeasurements: []
}

export type ChartContainerPropsType = {
    allMeasurements: []
}