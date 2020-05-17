import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import HomeScreen from '../screen/Home/HomeScreen';
import MenuLesson from '../screen/Home/Lesson/MenuLesson';
//Quiz
import Quiz from '../screen/Home/Quiz/Quiz';
import QuizResult from '../screen/Home/Quiz/QuizResult';
import QuizDetail from '../screen/Home/Quiz/QuizDetail/QuizDetail';

//menu lesson

import {createStackNavigator} from 'react-navigation-stack';

const Home = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  MenuLesson: {
    screen: MenuLesson,
    navigationOptions: {
      headerShown: false,
    },
  },
  QuizDetail: {
    screen: QuizDetail,
    navigationOptions: {
      headerShown: false,
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: () => ({
      headerTitle: 'QUIZ',
      headerStyle: {
        height: 110,
        backgroundColor: '#5979D8',
      },
      headerBackground: () => (
        <LinearGradient
          start={{x: 0.0, y: 0.0}}
          end={{x: 0.0, y: 1.0}}
          locations={[0, 0.2, 0.6]}
          colors={['#5979D8', '#375AC0', '#042EA9']}
          style={{flex: 1}}
        />
      ),
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
      },
      headerTitleAlign: 'center',
    }),
  },
  QuizResult: {
    screen: QuizResult,
    navigationOptions: () => ({
      headerTitle: 'QUIZ RESULT',
      headerStyle: {
        height: 110,
        backgroundColor: '#5979D8',
      },
      headerBackground: () => (
        <LinearGradient
          start={{x: 0.0, y: 0.0}}
          end={{x: 0.0, y: 1.0}}
          locations={[0, 0.2, 0.6]}
          colors={['#5979D8', '#375AC0', '#042EA9']}
          style={{flex: 1}}
        />
      ),
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
      },
      headerTitleAlign: 'center',
      headerLeft: () => false,
    }),
  },
});

export default Home;
