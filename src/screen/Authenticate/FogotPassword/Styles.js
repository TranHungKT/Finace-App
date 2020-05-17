import {StyleSheet, Dimensions} from 'react-native';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default Styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 20,
    flex: 0.2,
  },
  inputText: {
    borderBottomWidth: 2,
    marginRight: 20,
    marginLeft: 10,
    flex: 1,
  },
  inputIcon: {
    fontSize: 32,
    marginLeft: 5,
    marginTop: 9,
  },
  button: {
    flexDirection: 'row',
    position: 'relative',
    top: '60%',
  },
  buttonSmall: {
    borderRadius: 55,
    marginHorizontal: 20,
    width: screenWidth / 3,
    borderWidth: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  textButtonSmall: {
    fontSize: 22,
    color: '#1E3787',
    fontFamily: 'Poppins',
  },
  buttonBig: {
    width: screenWidth / 2,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E3787',
    height: 50,
  },
  textButtonBig: {
    fontSize: 22,
    color: '#FFF',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
  text: {
    fontSize: 14,
    marginHorizontal: 20,
    fontFamily: 'Poppins',
    marginTop: 10,
  },
});
