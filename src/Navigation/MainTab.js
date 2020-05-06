import {
  createMaterialTopTabNavigator,
  createBottomTabNavigator,
} from 'react-navigation-tabs';
import Home from '../Navigation/Home';
import BudgetPlaner from '../screen/BudgetPlaner/BudgetPlaner';
import Glosary from '../screen/Glosary/Glosary';
import Profile from '../screen/Profile/Profile';
const MainTab = createBottomTabNavigator({
  HomeScreen: {
    screen: Home,
  },
  Glosary: {
    screen: Glosary,
  },
  BudgetPlaner: {
    screen: BudgetPlaner,
  },
  Profile: {
    screen: Profile,
  },
});

export default MainTab;
