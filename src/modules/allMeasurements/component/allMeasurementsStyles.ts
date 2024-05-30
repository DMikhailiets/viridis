import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    minHeight: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  cart: {
    flex: 1,
    width: 350,
    marginTop: 20,
    backgroundColor: 'white',
    color: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    height: 80,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  subCart: {
    width: 10,
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subCart1: {
    width: 20,
    backgroundColor: "#A6D7D4",
    borderBottomRightRadius: 10, 
    borderTopRightRadius: 10,      
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20
  },
  title: {
    fontSize: 35,
    color: '#A6D7D4',
    fontFamily: 'Montserrat',
    fontWeight: '100',
  },
  text: {
    color: '#A6D7D4',
    fontSize: 20,
    fontWeight: '100',
  },
  textIn: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '100',
  }
})

export default styles