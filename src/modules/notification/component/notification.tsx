import React, {Component} from 'react'
import {
  StyleSheet,
  Alert,
} from 'react-native'
import { NotificationComponentPropsType } from '../../../core/types'
import NotifService from '../../../core/notificationService'

class Notification extends Component<NotificationComponentPropsType> {
  constructor(props: any) {
    super(props)
    this.state = {}

    this.notif = new NotifService(
      this.onRegister.bind(this),
      this.onNotif.bind(this),
    )
  }
  CreateNotif(params: any, type: string, props: any){
    this.notif.localNotif(params)
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
      <>{this.props.criticalValue ? this.CreateNotif({title: 'Attention', message: 'Glucose level ​has reached critical value!'},'CRITICALVALUE', this.props) :<></>}
        {this.props.disconnected ? this.CreateNotif({title: 'Attention', message: 'Device connection is lost!'}, 'DISCONNECTED', this.props) :<></>}
      </>
    )
  }

  onRegister(token: any) {
    this.setState({registerToken: token.token, fcmRegistered: true})
  }

  onNotif(notif: any) {
    Alert.alert(notif.title, notif.message)
  }

  handlePerm(perms: any) {
    Alert.alert('Permissions', JSON.stringify(perms))
  }
}

export default Notification