import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

let Blood: React.FC = (props) => {
    return (
        <View >
            <Image source={require('../../img/blood.png')}/>
        </View>
    )    
}

const styles = StyleSheet.create({
    icon: {
        width: '20',
    }
    });



export default Blood


