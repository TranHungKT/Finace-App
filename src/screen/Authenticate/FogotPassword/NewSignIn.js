import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default class NewSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 0.8}}>
          <Text style={styles.text}>
            Your password has been reset successfully.Now you can sign in with
            your new password.
          </Text>
        </View>
        <View style={{flex: 0.2, justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('SignIn');
            }}
            style={styles.loginButton}>
            <Text style={styles.loginText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginButton: {
    flex: 0.5,
    justifyContent: 'center',
    width: screenWidth - 80,
    left: 80 / 2,
    height: 55,
    borderRadius: 55,
    backgroundColor: '#042EA9',
  },
  loginText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  text: {
    fontSize: 12,
    marginHorizontal: 20,
    color: '#2F4656',
    marginTop: 20,
    flex: 0.5,
  },
});
