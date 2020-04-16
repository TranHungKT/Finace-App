import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Icon, Left, Button } from 'native-base';

import styles from './Styles';



export default class EnterEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (<>
            <Text style={stylesEmail.text}>
                Enter your mail address and we'll send a code to reset your password.
            </Text>
            <View style={stylesEmail.input}>
                <Left style={{ flex: 0 }}>
                    <Icon name='mail' style={{ fontSize: 32, marginLeft: 5 }} />
                </Left>
                <TextInput
                    placeholder="Email"
                    onChangeText={(username) => this.setState({ username })}
                    value={this.state.username}
                    underlineColorAndroid="transparent"
                >
                </TextInput>
            </View>
            <View style={stylesEmail.button}>
                <Button
                    style={stylesEmail.buttonSmall}
                    onPress={() => this.props.navigation.navigate('SignIn')}
                >
                    <Text style={stylesEmail.textButtonSmall}>Back</Text>
                </Button>
                <Button
                    style={stylesEmail.buttonBig}
                    onPress={() => this.props.navigation.navigate("EnterCode")}
                >
                    <Text style={stylesEmail.textButtonBig}>Reset</Text>
                </Button>
            </View>
        </>
        );
    }
}


const stylesEmail = StyleSheet.create({
    ...styles,
})