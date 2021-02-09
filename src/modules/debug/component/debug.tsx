import React from 'react'
import { View, Text, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { DebugComponentPropsType, MainScreenComponentPropsType } from '../../../core/types'
import styles from './debugStyles'


let DebugComponent: React.FC<DebugComponentPropsType> = ({log, resetMeasurementsDataFromRedux, resetAllMeasurementsData, resetMeasurementsDataFromLocalstorage}) => {
let logArray = log.map((log: string) => <Text key={log}>{log}</Text>)
    return (
        <View style={styles.container}>
            <ScrollView>
                {logArray}
            </ScrollView>
            <View style={styles.buttonsWrapper}>
                <Button
                    onPress={() => resetMeasurementsDataFromRedux()}
                    title="Reset redux"
                    color="#841584"
                />
                <Button
                    onPress={() => resetMeasurementsDataFromLocalstorage()}
                    title="Reset localstorage"
                    color="green"
                />
                <Button
                    onPress={() => resetAllMeasurementsData()}
                    title="Reset all"
                    color="red"
                />  
            </View>
        </View>
    )
}

export default DebugComponent