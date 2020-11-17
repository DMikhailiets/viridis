import React from 'react'
import { Text } from 'react-native'
import { View } from '../../../../components/Themed'

type  BaseProps = {
    device: any
}

let Base: React.FC<BaseProps> = ({device}) => {
    console.log(device)
    return (
        <View >
            <Text>
                {device}
            </Text>
        </View>
    )    
}

export default Base