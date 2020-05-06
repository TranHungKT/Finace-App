// import React from 'react';
import BudgetIntro from '../screen/Intro/Budget';
import GlosaryIntro from '../screen/Intro/Glosary';
import DailyGoal from '../screen/Intro/DailyGoal';
import Lesson from '../screen/Intro/Lesson';
import {createStackNavigator} from 'react-navigation-stack';
const Intro = createStackNavigator({
  BudgetIntro: {
    screen: BudgetIntro,
    navigationOptions: {
      headerShown: false,
    },
  },
  GlosaryIntro: {
    screen: GlosaryIntro,
    navigationOptions: {
      headerShown: false,
    },
  },
  DailyGoal: {
    screen: DailyGoal,
    navigationOptions: {
      headerShown: false,
    },
  },
  Lesson: {
    screen: Lesson,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default Intro;
