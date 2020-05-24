import React, {Component} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
//React-navigation

import 'react-native-gesture-handler';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import authenticated, {
  forgotPasswordStack,
} from './src/Navigation/Authenticate';

import Header from './src/screen/Authenticate/FogotPassword/Header';

import MainTab from './src/Navigation/MainTab';

import Splash from './src/screen/splash/Splash';

import Intro from './src/Navigation/Intro';

// import ExpenseStack from './src/Navigation/Expense';
// import BudgetPlanerTab from './src/Navigation/BudgetPlanner';
//Redux

import {Provider} from 'react-redux';
import store from './src/redux/store';

const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
  },
});

const StackNavigator = createStackNavigator({
  MainScreen: {
    screen: MainTab,
    navigationOptions: {
      headerShown: false,
    },
  },
  Splash: {
    screen: Splash,
    navigationOptions: {
      headerShown: false,
    },
  },
  authenticated: {
    screen: authenticated,
    navigationOptions: () => ({
      headerTitle: 'FINSMA',
      headerStyle: {
        height: 180,
        backgroundColor: '#5979D8',
      },
      headerBackground: () => (
        <LinearGradient
          start={{x: 0.0, y: 0.0}}
          end={{x: 0.0, y: 1.0}}
          locations={[0, 0.2, 0.6]}
          colors={['#5979D8', '#375AC0', '#042EA9']}
          style={styles.headerBackground}
        />
      ),
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 48,
        color: '#fff',
      },
    }),
  },
  Intro: {
    screen: Intro,
    navigationOptions: {
      headerShown: false,
    },
  },

  forgotPasswordStack: {
    screen: forgotPasswordStack,
    navigationOptions: () => ({
      headerTitle: () => <Header />,
      headerStyle: {
        height: screenHeight / 3,
        backgroundColor: '#5979D8',
      },
      headerBackground: () => (
        <LinearGradient
          start={{x: 0.0, y: 0.0}}
          end={{x: 0.0, y: 1.0}}
          locations={[0, 0.2, 0.6]}
          colors={['#5979D8', '#375AC0', '#1E3787']}
          style={styles.headerBackground}
        />
      ),
    }),
  },
  // ExpenseStack: {
  //   screen: ExpenseStack,
  //   navigationOptions: {
  //     headerShown: false,
  //   },
  // },
});

const AppContainer = createAppContainer(StackNavigator);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
