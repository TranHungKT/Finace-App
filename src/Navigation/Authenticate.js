// import React from 'react';
import SignIn from '../screen/Authenticate/SignIn';
import SignUp from '../screen/Authenticate/SignUp';
import EnterEmail from '../screen/Authenticate/FogotPassword/EnterEmail';
import EnterCode from '../screen/Authenticate/FogotPassword/EnterCode';
import NewPassword from '../screen/Authenticate/FogotPassword/NewPassword';
import NewSignIn from '../screen/Authenticate/FogotPassword/NewSignIn';
// import Header from '../screen/Authenticate/FogotPassword/Header';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
const authenticated = createMaterialTopTabNavigator(
  {
    SignIn: {
      screen: SignIn,
    },
    SignUp: {
      screen: SignUp,
    },
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: '#042EA9',
      },
    },
  },
);

export const forgotPasswordStack = createStackNavigator({
  EnterEmail: {
    screen: EnterEmail,
    navigationOptions: {
      headerShown: false,
    },
  },
  EnterCode: {
    screen: EnterCode,
    navigationOptions: {
      headerShown: false,
    },
  },
  NewPassword: {
    screen: NewPassword,
    navigationOptions: {
      headerShown: false,
    },
  },
  NewSignIn: {
    screen: NewSignIn,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default authenticated;
