import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { statusList } from '../../core/enums'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'

const LocationDisabledModal = () => {
  const [modalVisible, setModalVisible] = useState(true);
  //const isVisible = () => {
  //}
  return (
      <Modal
        animationType="fade"
        //presentationStyle='fullScreen'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View style={styles.errorMessage}>
            <Ionicons style={styles.bluetoothLogo} name="md-navigate"></Ionicons>
            <Text style={styles.errorMessageText}>Location is disabled. Enable it to get started</Text>
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
  );
};

export default LocationDisabledModal;