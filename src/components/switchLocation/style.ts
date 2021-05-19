import { View, StyleSheet, Image } from 'react-native'
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
    infoView: {
      flex: 1,
      flexDirection: 'column',
      justifyContent:'center',
      alignItems: 'center'
    },
    button: {
        borderRadius: 300,
        backgroundColor: '#38C0F3',
        maxHeight: 60,
        width: 200,
        color: 'white',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontFamily: 'Montserrat',
        fontSize: 22
    },
    blackText: {
        fontFamily: 'Montserrat',
        color: 'grey',
        fontSize: 18,
        margin: 40
    }
    });

    export default styles