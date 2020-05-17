import {StyleSheet, Dimensions} from 'react-native';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default Styles = StyleSheet.create({
  button: {
    marginTop: screenHeight / 5 - 10,
    width: screenWidth / 2,
    justifyContent: 'center',
    backgroundColor: '#5979D8',
  },
  input: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 40,
    borderBottomWidth: 2,
    marginRight: 40,
  },
  loginButton: {
    position: 'absolute',
    top: screenHeight - 400,
    width: screenWidth - 80,
    left: 80 / 2,
    borderRadius: 55,
    backgroundColor: '#042EA9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  loginText: {
    fontSize: 24,
    color: '#fff',

    fontWeight: 'bold',
  },
});
