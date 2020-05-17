import AddExpense from '../screen/BudgetPlaner/AddExpense';
import Expense from '../screen/BudgetPlaner/Expense';
import ExpenseCategory from '../screen/BudgetPlaner/ExpenseCategoty';
import {createStackNavigator} from 'react-navigation-stack';

const ExpenseStack = createStackNavigator({
  ExpenseStack: {
    screen: Expense,
    navigationOptions: {
      headerShown: false,
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
});
ExpenseStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};
export default ExpenseStack;
