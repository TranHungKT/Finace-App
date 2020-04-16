import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { Icon, Container, Left, Right, Spinner } from "native-base";
import PropTypes from 'prop-types';
const screenHeight = Math.round(Dimensions.get('window').height);

import { connect } from 'react-redux';
import { loginUser } from '../redux/action/userAction';

import styles from './Styles';


const styleSignIn = StyleSheet.create({
    ...styles,
    forgetButton: {
        position: 'absolute',
        top: screenHeight - 320,
        alignSelf: 'center'
    },
    forgetButtonText: {
        color: '#375AC0',
        fontSize: 18,
        fontFamily: 'Poppins'
    }
})


class SignIn extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: () => (
                <Icon onPress={() => { this.navigation.navigate('Splash') }} name="arrow-back" />
            )
        }
    }


    state = {
        email: '',
        password: '',
        security: true,
        errors: {}
    };

    toggleShow = () => {
        this.setState(prevState => ({ security: !prevState.security }));
    }

    login = () => {
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(userData);
    }

    render() {
        const { loading } = this.props;
        return (
            <Container>
                <View style={styleSignIn.input}>
                    <Left style={{ flex: 0 }}>
                        <Icon name='ios-contact' style={{ fontSize: 32, marginLeft: 5 }} />
                    </Left>
                    <TextInput
                        placeholder="Email"
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                    >
                    </TextInput>
                </View>
                <View style={styleSignIn.input}>
                    <Left style={{ flex: 0 }}>
                        <Icon name='ios-lock' style={{ fontSize: 32, marginLeft: 5 }} />
                    </Left>
                    <TextInput
                        placeholder="Password"
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                        secureTextEntry={this.state.security}
                        style={{ marginLeft: 5 }}
                    >
                    </TextInput>
                    <Right style={{ position: 'relative', marginRight: 20 }}>
                        <TouchableOpacity onPress={this.toggleShow}>
                            <Text>Show</Text>
                        </TouchableOpacity>
                    </Right>
                </View>
                <TouchableOpacity style={styleSignIn.loginButton} onPress={this.login}>
                    <Text style={styleSignIn.loginText}>
                        Sign In
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styleSignIn.forgetButton}
                    onPress={() => this.props.navigation.navigate('EnterEmail')}
                >
                    <Text style={styleSignIn.forgetButtonText}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
            </Container >
        );
    }
}



SignIn.propTypes = {
    user: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
}


const mapStateToProps = (state) => ({
    user : state.user
});

export default connect(mapStateToProps , { loginUser })(SignIn);