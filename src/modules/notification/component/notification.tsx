/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { NotificationComponentPropsType } from '../../../core/types';
import NotifService from '../../../core/notificationService';

class Notification extends Component<NotificationComponentPropsType> {
  constructor(props: any) {
    super(props);
    this.state = {};

    this.notif = new NotifService(
      this.onRegister.bind(this),
      this.onNotif.bind(this),
    );
  }
  CreateNotif(params: any, type: string, props: any){
    this.notif.localNotif(params);
    switch(type){
      case('CRITICALVALUE'): {
        this.props.setCriticalValueNotificationStatus(false)
      }
      case('DISCONNECTED'): {
        this.props.setDisconnectedNotificationStatus(false)
      }
      default: 
    }
  }
  render() {
    return (
      <>{this.props.criticalValue ? this.CreateNotif({title: 'Внимание', message: 'Уровень сахара в крови достиг критических значений!'},'CRITICALVALUE', this.props) :<></>}
        {this.props.disconnected ? this.CreateNotif({title: 'Внимание', message: 'Потерено соединение с устройством!'}, 'DISCONNECTED', this.props) :<></>}
      </>
      // <View style={styles.container}>
      //   <Text style={styles.title}>
      //     Example app react-native-push-notification
      //   </Text>
      //   <View style={styles.spacer}></View>
      //   <TextInput
      //     style={styles.textField}
      //     value={this.state.registerToken}
      //     placeholder="Register token"
      //   />
      //   <View style={styles.spacer}></View>

      //   <TouchableOpacity
      //     style={styles.button}
      //     onPress={() => {
      //       this.notif.localNotif();
      //     }}>
      //     <Text>Local Notification (now)</Text>
      //   </TouchableOpacity>
      //   <TouchableOpacity
      //     style={styles.button}
      //     onPress={() => {
      //       this.notif.localNotif('sample.mp3');
      //     }}>
      //     <Text>Local Notification with sound (now)</Text>
      //   </TouchableOpacity>
      //   <View style={styles.spacer}></View>

      //   {this.state.fcmRegistered && <Text>FCM Configured !</Text>}

      //   <View style={styles.spacer}></View>
      // </View>
    );
  }

  onRegister(token: any) {
    this.setState({registerToken: token.token, fcmRegistered: true});
  }

  onNotif(notif: any) {
    Alert.alert(notif.title, notif.message);
  }

  handlePerm(perms: any) {
    Alert.alert('Permissions', JSON.stringify(perms));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: '#000000',
    margin: 5,
    padding: 5,
    width: '70%',
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
  textField: {
    borderWidth: 1,
    borderColor: '#AAAAAA',
    margin: 5,
    padding: 5,
    width: '70%',
  },
  spacer: {
    height: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Notification