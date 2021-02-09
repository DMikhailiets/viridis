import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeDataInLocalStorage = async (value: any) => {
    try {
        let currentDbMeasurements = await getDataFromLocalStorage()
        await AsyncStorage.setItem('measurements', JSON.stringify([...currentDbMeasurements, value]))
    }  catch (e) {
        console.log(e)
    }
}

export const getDataFromLocalStorage = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('measurements')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        console.log(e)
    }
}

export const resetLocalStorageData = async () => {
    try {
        await AsyncStorage.setItem('measurements', JSON.stringify([]))
    } catch(e) {
        console.log(e)
    }
}