import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body,
} from 'native-base';

import styles from './Styles';
export default class SignUp extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: () => (
        <Icon
          onPress={() => {
            this.navigation.navigate('Splash');
          }}
          name="arrow-back"
        />
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <View style={styles.input}>
          <Left style={{flex: 0}}>
            <Icon name="ios-contact" style={{fontSize: 32, marginLeft: 5}} />
          </Left>
          <TextInput
            placeholder="Full Name"
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}></TextInput>
        </View>
        <View style={styles.input}>
          <Left style={{flex: 0}}>
            <Icon name="mail" style={{fontSize: 32, marginLeft: 5}} />
          </Left>
          <TextInput
            placeholder="Email"
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}></TextInput>
        </View>
        <View style={styles.input}>
          <Left style={{flex: 0}}>
            <Icon name="ios-lock" style={{fontSize: 32, marginLeft: 5}} />
          </Left>
          <TextInput
            placeholder="Password"
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            secureTextEntry={this.state.security}
            style={{marginLeft: 5}}></TextInput>
        </View>
        <View style={styles.input}>
          <Left style={{flex: 0}}>
            <Icon name="ios-lock" style={{fontSize: 32, marginLeft: 5}} />
          </Left>
          <TextInput
            placeholder="Confirm Password"
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            secureTextEntry={this.state.security}
            style={{marginLeft: 5}}></TextInput>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}
