import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';



const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default class NewSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>Your password has been reset successfully.Now you can sigi in with your new password.</Text>
        <TouchableOpacity 
          onPress = {() => {this.props.navigation.navigate('SignIn')}}
          style={styles.loginButton} 
        >
          <Text style={styles.loginText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  loginButton: {
    position: 'absolute',
    justifyContent: 'center',
    top: screenHeight - 425,
    width: screenWidth - 80,
    left: 80 / 2,
    height: 55,
    borderRadius: 55,
    backgroundColor: '#042EA9',
  },
  loginText: {
    fontSize: 35,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  text: {
    fontSize: 20,
    marginHorizontal: 20,
    fontFamily: 'sans-serif-medium',
    color: '#A7B9C2'
  }
})