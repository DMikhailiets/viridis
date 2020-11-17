import React, { useEffect } from 'react'
import { AppState } from '../../../redux/store'
import { connect } from 'react-redux'
import { fetchDeviceData } from '../../../redux/selectors'
import Base from '../component/base'

type BaseContainerProps = {
    device: any
}

let BaseContainer: React.FC<BaseContainerProps> = ({device}) => {
    return  (
        <Base device={device}/>
    )
}

export default connect(
    (state: AppState) => ({
        device: fetchDeviceData(state),
    }), {}
    )
(BaseContainer)


