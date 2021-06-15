import React, { useState } from "react"
import { Alert, Modal, Text, Pressable, View } from "react-native"
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'

const BluetoothDisabledModal = () => {
  const [modalVisible, setModalVisible] = useState(true)
  return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.")
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.errorMessage}>
              <Ionicons style={styles.bluetoothLogo} name="ios-bluetooth"></Ionicons>
              <Text style={styles.errorMessageText}>Bluetooth is disabled. Enable it to get started</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Ok</Text>
              </Pressable>
            </View>
            </View>
        </View>
      </Modal>
  )
}

export default BluetoothDisabledModal