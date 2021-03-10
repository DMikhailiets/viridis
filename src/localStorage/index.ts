import AsyncStorage from '@react-native-async-storage/async-storage'

const storageApi = {
    storeDataInLocalStorage: (value: any) => async () => {
        try {
            let currentDbMeasurements = await storageApi.getDataFromLocalStorage()
            await AsyncStorage.setItem('measurements', JSON.stringify([...currentDbMeasurements, value]))
        }  catch (e) {
            console.log(e)
        }
    },
    storeArrayDataInLocalStorage: async (data: any) => {
        try {
            await AsyncStorage.setItem('measurements', JSON.stringify([ ...data]))
        }  catch (e) {
            console.log(e)
        }
    },
    getDataFromLocalStorage: async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('measurements')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
            console.log(e)
        }
    },
    resetLocalStorageData: async () => {
        try {
            await AsyncStorage.setItem('measurements', JSON.stringify([]))
        } catch(e) {
            console.log(e)
        }
    }
}


export default storageApi
