import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

const styles = StyleSheet.create({
  time: {
    margin: 20,
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});

export default class Weekly extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <View style={styles.time}>
          <Text style={{flex: 0.9}}>Weekly</Text>
          <Icon name="ios-arrow-down" />
        </View>
      </View>
    );
  }
}
