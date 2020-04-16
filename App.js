import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions,View,Text } from 'react-native';

//React-navigation
import 'react-native-gesture-handler';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';


//Main Screen
import HomeScreen from './src/Home/HomeScreen';
import Glosary from './src/Glosary/Glosary';
import BudgetPlaner from './src/BudgetPlaner/BudgetPlaner';
import Profile from './src/Profile/Profile';


//Lesson and Quiz
import Quiz from './src/Home/Quiz/Quiz'; 
import QuizResult from './src/Home/Quiz/QuizResult';

//screen Autheticate
import Splash from './src/splash/Splash';
import SignIn from './src/Authenticate/SignIn';
import SignUp from './src/Authenticate/SignUp';
import EnterEmail from './src/Authenticate/FogotPassword/EnterEmail'
import EnterCode from './src/Authenticate/FogotPassword/EnterCode'
import NewPassword from './src/Authenticate/FogotPassword/NewPassword'
import NewSignIn from './src/Authenticate/FogotPassword/NewSignIn'
import Header from './src/Authenticate/FogotPassword/Header';
//component

//Redux

import { Provider } from 'react-redux';
import store from './src/redux/store';


const screenHeight = Math.round(Dimensions.get('window').height);


const QuizQuestion = createStackNavigator({   
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: () => ({
            headerTitle: "QUIZ",
            headerStyle: {
                height: 100,
                backgroundColor: '#5979D8',
                
            },
            headerBackground: () => (
                <LinearGradient
                    start={{ x: 0.0, y: 0.0 }} end={{ x: 0.0, y: 1.0 }}
                    locations={[0, 0.2, 0.6]}
                    colors={['#5979D8', '#375AC0', '#042EA9']}
                    style={{ flex: 1 }}
                />
            ),
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 28,
                color: "#fff",
            }, 
            headerTitleAlign: 'center'
        })
    },
    QuizResult: {
        screen: QuizResult,
        navigationOptions: () => ({
            headerTitle: "QUIZ RESULT",
            headerStyle: {
                height: 100,
                backgroundColor: '#5979D8',
                
            },
            headerBackground: () => (
                <LinearGradient
                    start={{ x: 0.0, y: 0.0 }} end={{ x: 0.0, y: 1.0 }}
                    locations={[0, 0.2, 0.6]}
                    colors={['#5979D8', '#375AC0', '#042EA9']}
                    style={{ flex: 1 }}
                />
            ),
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 28,
                color: "#fff",
            }, 
            headerTitleAlign: 'center',
            headerLeft: () => false
        })
    },
    
})


const authenticated = createMaterialTopTabNavigator({
    SignIn: {
        screen: SignIn
    },
    SignUp: {
        screen: SignUp
    }
}, {
    tabBarOptions: {
        style: {
            backgroundColor: '#042EA9',
        }
    }
}
)


const mainTab = createBottomTabNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    Glosary:{
        screen: Glosary
    },
    BudgetPlaner: {
        screen: BudgetPlaner
    },
    Profile: {
        screen: Profile
    }
})


const forgotPasswordStack = createStackNavigator({
    EnterEmail: {
        screen: EnterEmail,
        navigationOptions: {
            headerShown: false
        }
    },
    EnterCode: {
        screen: EnterCode,
        navigationOptions: {
            headerShown: false
        }
    },
    NewPassword:{
        screen: NewPassword,
        navigationOptions: {
            headerShown: false
        }
    },
    NewSignIn:{
        screen: NewSignIn,
        navigationOptions: {
            headerShown: false
        }
    }
})



const StackNavigator = createStackNavigator({
    MainScreen:{
        screen: mainTab,
        navigationOptions: {
            headerShown: false
        }
    },
    Splash: {
        screen: Splash,
        navigationOptions: {
            headerShown: false
        }
    },
    authenticated: {
        screen: authenticated,
        navigationOptions: () => ({
            headerTitle: "FINSMA",
            headerStyle: {
                height: 180,
                backgroundColor: '#5979D8'
            },
            headerBackground: () => (
                <LinearGradient
                    start={{ x: 0.0, y: 0.0 }} end={{ x: 0.0, y: 1.0 }}
                    locations={[0, 0.2, 0.6]}
                    colors={['#5979D8', '#375AC0', '#042EA9']}
                    style={{ flex: 1 }}
                />
            ),
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 48,
                color: "#fff"
            }
        })
    },
    forgotPasswordStack:{
        screen: forgotPasswordStack,
        navigationOptions: () => ({
            headerTitle: () => <Header/>,
            headerStyle: {
                height: screenHeight/3,
                backgroundColor: '#5979D8'
            },
            headerBackground: () => (
                <LinearGradient
                    start={{ x: 0.0, y: 0.0 }} end={{ x: 0.0, y: 1.0 }}
                    locations={[0, 0.2, 0.6]}
                    colors={['#5979D8', '#375AC0', '#1E3787']}
                    style={{ flex: 1 }}
                />
            ),
        })
    },
    
})

const AppContainer = createAppContainer(QuizQuestion);


class App extends Component {
    render() {
        return (
            <Provider store = {store}>
                <AppContainer />
            </Provider>
        );
    }
}


export default App;