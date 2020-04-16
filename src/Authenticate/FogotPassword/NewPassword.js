import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput } from 'react-native';
import {Button,Left,Icon} from 'native-base';

import styles from './Styles';

export default class NewPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <Text style = {stylesNew.text}>Please enter your new password</Text>
        <View style={stylesNew.input}>
                <Left style={{ flex: 0 }}>
                    <Icon name='ios-lock' style={{ fontSize: 32, marginLeft: 5 }} />
                </Left>
                <TextInput
                    placeholder="Email"
                    onChangeText={(username) => this.setState({ username })}
                    value={this.state.username}
                    underlineColorAndroid="transparent"
                >
                </TextInput>
            </View>
            <View style={stylesNew.input}>
                <Left style={{ flex: 0 }}>
                    <Icon name='ios-lock' style={{ fontSize: 32, marginLeft: 5 }} />
                </Left>
                <TextInput
                    placeholder="Email"
                    onChangeText={(username) => this.setState({ username })}
                    value={this.state.username}
                    underlineColorAndroid="transparent"
                >
                </TextInput>
            </View>
            <View style={stylesNew.buttonNew}>
        <Button style={stylesNew.buttonSmall}>
          <Text style={stylesNew.textButtonSmall}
                onPress={() => this.props.navigation.navigate("EnterCode")}  
          >
            Back
          </Text>
        </Button>
        <Button style={stylesNew.buttonBig}>
          <Text style={stylesNew.textButtonBig}
                onPress={() => this.props.navigation.navigate("NewSignIn")} 
          >
            Verify</Text>
        </Button>
      </View>
      </>
    );
  }
}


const stylesNew = StyleSheet.create({
  ...styles,
  buttonNew: {
    flexDirection: 'row',
    position: 'relative',
    top: '50%'
  }
})