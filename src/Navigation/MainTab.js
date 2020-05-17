import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from '../Navigation/Home';
import Budget from './BudgetPlanner';
import Glosary from '../screen/Glosary/Glosary';
import ProfileNavigator from '../Navigation/Profile';
import {Icon} from 'native-base';
import {TouchableHighlight} from 'react-native-gesture-handler';
const MainTab = createBottomTabNavigator({
  HomeScreen: {
    screen: Home,
    tabBarOptions: {
      activeTintColor: 'red',
    },
    navigationOptions: {
      tabBarLabel: ({focused}) => (
        <Label nameLabel={'Home'} focused={focused} />
      ),
      tabBarIcon: ({focused}) => (
        <IconTab iconname={'ios-home'} focused={focused} />
      ),
    },
  },
  Glosary: {
    screen: Glosary,
    navigationOptions: {
      tabBarIcon: ({focused}) => (
        <IconTab iconname={'ios-paper'} focused={focused} />
      ),
      tabBarLabel: ({focused}) => (
        <Label nameLabel={'Glosary'} focused={focused} />
      ),
    },
  },
  BudgetPlaner: {
    screen: Budget,
    navigationOptions: () => ({
      tabBarIcon: ({focused}) => (
        <IconTab iconname={'ios-business'} focused={focused} />
      ),
      tabBarLabel: ({focused}) => (
        <Label nameLabel={'Budget'} focused={focused} />
      ),
    }),
  },
  ProfileNavigator: {
    screen: ProfileNavigator,
    navigationOptions: {
      tabBarIcon: ({focused}) => (
        <IconTab iconname={'ios-person'} focused={focused} />
      ),
      tabBarLabel: ({focused}) => (
        <Label nameLabel={'Profile'} focused={focused} />
      ),
    },
  },
});

class IconTab extends React.Component {
  render() {
    let iconname = this.props.iconname;
    focused = this.props.focused;
    return (
      <Icon
        name={iconname}
        size={20}
        style={{
          color: `${focused ? '#06293D' : '#C7D7DA'}`,
          paddingTop: 10,
        }}
      />
    );
  }
}

class Label extends React.Component {
  render() {
    nameLabel = this.props.nameLabel;
    focused = this.props.focused;
    return (
      <Text
        style={{
          alignItems: 'center',
          alignSelf: 'center',
          fontSize: 13,
          color: `${focused ? '#06293D' : '#C7D7DA'}`,
        }}>
        {nameLabel}
      </Text>
    );
  }
}

export default MainTab;
