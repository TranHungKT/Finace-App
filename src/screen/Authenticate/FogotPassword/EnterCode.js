import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import CodeInput from 'react-native-code-input';

import styles from './Styles';

export default class EnterCode extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 0.05}}>
          <Text style={stylesCode.text}>
            Please enter the code sent to the registered email.
          </Text>
        </View>
        <View style={{flex: 0.15, marginTop: 40}}>
          <CodeInput
            ref="codeInputRef1"
            secureTextEntry
            borderType={'underline'}
            space={5}
            inputPosition="left"
            activeColor="#B3B7C2"
            inactiveColor="#B3B7C2"
            inputPosition="center"
            size={55}
            keyboardType="numeric"
            cellBorderWidth={3}
            codeLength={6}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 0.7,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'flex-start',
          }}>
          <Text style={stylesCode.resendText}>I didn't get the code.</Text>
          <TouchableOpacity style={stylesCode.resendButton}>
            <Text style={stylesCode.resendText1}>Resend Code</Text>
          </TouchableOpacity>
        </View>
        <View style={stylesCode.buttonCode}>
          <Button style={stylesCode.buttonSmall}>
            <Text
              style={stylesCode.textButtonSmall}
              onPress={() => this.props.navigation.navigate('EnterEmail')}>
              Back
            </Text>
          </Button>
          <Button style={stylesCode.buttonBig}>
            <Text
              style={stylesCode.textButtonBig}
              onPress={() => this.props.navigation.navigate('NewPassword')}>
              Verify
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}

const stylesCode = StyleSheet.create({
  ...styles,
  resendButton: {},
  resendText: {
    marginTop: 20,
    fontSize: 14,
    marginLeft: 20,
  },
  resendText1: {
    marginTop: 20,
    fontSize: 14,
    marginLeft: 5,
    color: '#339FD3',
    textDecorationLine: 'underline',
  },
  buttonCode: {
    flex: 0.2,
    flexDirection: 'row',
  },
});
