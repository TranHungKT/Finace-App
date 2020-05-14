import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

const styles = StyleSheet.create({
  time: {
    flex: 0.1,
    margin: 20,
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    color: 'blue',
    fontSize: 70,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default class Expense extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.time}>
          <Text style={{flex: 0.9}}>Weekly</Text>
          <Icon name="ios-arrow-down" />
        </View>
        <Icon
          name="ios-add-circle"
          large
          style={styles.addButton}
          onPress={() => this.props.navigation.navigate('AddExpense')}
        />
      </View>
    );
  }
}
