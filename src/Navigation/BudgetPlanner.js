import React from 'react';
import {StatusBar} from 'react-native';
import Balance from '../screen/BudgetPlaner/Balance';
import Expense from '../screen/BudgetPlaner/Expense';
import Income from '../screen/BudgetPlaner/Income';

import LinearGradient from 'react-native-linear-gradient';
import AddExpense from '../screen/BudgetPlaner/AddExpense';
import ExpenseCategory from '../screen/BudgetPlaner/ExpenseCategory';
import AddIncome from '../screen/BudgetPlaner/AddIncome';
import IncomeCategory from '../screen/BudgetPlaner/IncomeCategory';
//React-navigation
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

const BudgetPlanerTab = createMaterialTopTabNavigator(
  {
    Balance: {
      screen: Balance,
    },
    Expense: {
      screen: Expense,
    },
    Income: {
      screen: Income,
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

const Budget = createStackNavigator({
  BudgetPlan: {
    screen: BudgetPlanerTab,
    navigationOptions: {
      headerTitle: 'Budget Planer',
      headerStyle: {
        height: 154,
        backgroundColor: '#5979D8',
      },
      headerLayoutPreset: 'center',
      headerBackground: () => (
        <LinearGradient
          start={{x: 0.0, y: 0.0}}
          end={{x: 0.0, y: 1.0}}
          locations={[0, 0.2, 0.6]}
          colors={['#5979D8', '#375AC0', '#042EA9']}
          style={{flex: 1}}>
          <StatusBar
            translucent={true}
            backgroundColor={'transparent'}
            barStyle={'light-content'}
          />
        </LinearGradient>
      ),
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 32,
        color: '#fff',
        // justifyContent: 'center',
      },
    },
  },
  AddExpense: {
    screen: AddExpense,
    navigationOptions: {
      headerShown: false,
    },
  },
  ExpenseCategory: {
    screen: ExpenseCategory,
    navigationOptions: {
      headerShown: false,
    },
  },
  AddIncome: {
    screen: AddIncome,
    navigationOptions: {
      headerShown: false,
    },
  },
  IncomeCategory: {
    screen: IncomeCategory,
    navigationOptions: {
      headerShown: false,
    },
  },
});
export default Budget;
