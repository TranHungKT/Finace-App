import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>Forgot</Text>
        <Text style={styles.text}>Password?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff',
  },
});
