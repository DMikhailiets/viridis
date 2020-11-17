import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      minHeight: '100%',
      paddingHorizontal: 20,
      paddingVertical: 20
    },
    measurementsWrapper: {
      flex: 1,
      flexDirection: 'column',
      width: '100%',
      overflow: 'visible',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      color: "grey",
      fontFamily: 'Montserrat',
      fontSize: 24,
      marginTop: 100,
    },
    textBox: {
        marginTop: 50,
    },
    infoView: {
      flex: 1,
      flexDirection: 'column',
      justifyContent:'center',
      alignItems: 'center'
    }
    });

    export default styles