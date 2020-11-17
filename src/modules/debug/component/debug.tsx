import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { DebugComponentPropsType, MainScreenComponentPropsType } from '../../../core/types'
import styles from './debugStyles'


let DebugComponent: React.FC<DebugComponentPropsType> = ({log}) => {
let logArray = log.map((log: string) => <Text key={log}>{log}</Text>)
    return (
        <View style={styles.container}>
             <ScrollView>
             {logArray}
             </ScrollView>
        </View>
    )
}

export default DebugComponent