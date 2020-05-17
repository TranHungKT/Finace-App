import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Icon, Left, Button} from 'native-base';

import styles from './Styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class EnterEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 0.05}}>
          <Text style={stylesEmail.text}>
            Enter your mail address and we'll send a code to reset your
            password.
          </Text>
        </View>

        <View style={stylesEmail.input}>
          <Left style={{flex: 0}}>
            <Icon name="mail" style={stylesEmail.inputIcon} />
          </Left>
          <TextInput
            placeholder="Email"
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            underlineColorAndroid="transparent"
            style={stylesEmail.inputText}></TextInput>
        </View>
        <View style={{flex: 0.3, justifyContent: 'center'}}>
          <View style={stylesEmail.button}>
            <TouchableOpacity
              style={stylesEmail.buttonSmall}
              onPress={() => this.props.navigation.navigate('SignIn')}>
              <Text style={stylesEmail.textButtonSmall}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={stylesEmail.buttonBig}
              onPress={() => this.props.navigation.navigate('EnterCode')}>
              <Text style={stylesEmail.textButtonBig}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const stylesEmail = StyleSheet.create({
  ...styles,
});
