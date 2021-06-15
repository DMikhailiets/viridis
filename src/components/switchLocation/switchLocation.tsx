import React from 'react'
import { Image } from 'react-native'
import { Text, View } from '../../../components/Themed'
import * as Permissions from 'expo-permissions'
import styles from './style'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SwitchLocation = () => {
    const [askForPermission] = Permissions.usePermissions(Permissions.LOCATION, { ask: true })
    return (
      <View style={styles.infoView}>
        <Image source={require('../../img/Searching.png')}/>
        <Text style={styles.blackText}>The app doesn't have the necessary permissions</Text>
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
                askForPermission
            }}
        >
          <Text style={styles.text}>Get permission</Text>
        </TouchableOpacity>
      </View>
    )
  }

export default  SwitchLocation