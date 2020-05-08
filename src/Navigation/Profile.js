import Profile from '../screen/Profile/Profile';
import StudentInfor from '../screen/Profile/StudentInfor';

import {createStackNavigator} from 'react-navigation-stack';

const ProfileNavigator = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerShown: false,
    },
  },
  StudentInfor: {
    screen: StudentInfor,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default ProfileNavigator;
