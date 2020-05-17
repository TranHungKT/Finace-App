import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Button, Left, Icon} from 'native-base';

import styles from './Styles';

export default class NewPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      newPassword: '',
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 0.05, marginTop: 10}}>
          <Text style={stylesNew.text}>Please enter your new password</Text>
        </View>
        <View style={{flex: 0.7}}>
          <View style={stylesNew.input}>
            <Left style={{flex: 0}}>
              <Icon name="ios-lock" style={stylesNew.inputIcon} />
            </Left>
            <TextInput
              placeholder="New Password"
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              underlineColorAndroid="transparent"
              style={stylesNew.inputText}></TextInput>
          </View>
          <View style={stylesNew.input}>
            <Left style={{flex: 0}}>
              <Icon name="ios-lock" style={stylesNew.inputIcon} />
            </Left>
            <TextInput
              placeholder="Confirm Password"
              onChangeText={(newPassword) => this.setState({newPassword})}
              value={this.state.newPassword}
              underlineColorAndroid="transparent"
              style={styles.inputText}></TextInput>
          </View>
        </View>
        <View style={{flex: 0.25, justifyContent: 'center'}}>
          <View style={stylesNew.buttonNew}>
            <Button style={stylesNew.buttonSmall}>
              <Text
                style={stylesNew.textButtonSmall}
                onPress={() => this.props.navigation.navigate('EnterCode')}>
                Back
              </Text>
            </Button>
            <Button style={stylesNew.buttonBig}>
              <Text
                style={stylesNew.textButtonBig}
                onPress={() => this.props.navigation.navigate('NewSignIn')}>
                Reset
              </Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const stylesNew = StyleSheet.create({
  ...styles,
  buttonNew: {
    flex: 0.2,
    flexDirection: 'row',
  },
});
