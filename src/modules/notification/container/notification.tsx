import React from 'react'
import { connect } from 'react-redux'
import { DebugContainerPropsType } from '../../../core/types'
import { fetchNotificationsStatus } from '../../../redux/selectors'
import { AppState } from '../../../redux/store'
import NotificationComponent from '../component/notification'
import { NotificationContainerPropsType } from '../../../core/types'
import { setDisconnectedNotificationStatus, setCriticalValueNotificationStatus } from '../../../redux/reducers/deviceReducer'
let NotificationContainer: React.FC<NotificationContainerPropsType> = ({ notifications, setCriticalValueNotificationStatus, setDisconnectedNotificationStatus }) => {
    return <NotificationComponent 
            criticalValue={notifications.criticalValue} 
            disconnected={notifications.disconnected}
            setDisconnectedNotificationStatus={setDisconnectedNotificationStatus}
            setCriticalValueNotificationStatus={setCriticalValueNotificationStatus}
            />
} 

export default connect(
    (state: AppState) => ({
        notifications: fetchNotificationsStatus(state)
    }), {
        setDisconnectedNotificationStatus,
        setCriticalValueNotificationStatus
    })
(NotificationContainer)
