import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {Icon} from 'native-base';

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  circle: {
    backgroundColor: 'red',
    borderRadius: 10,
    height: 20,
    width: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 14,
    color: '#203442',
  },
  percent: {
    fontSize: 24,
    color: '#203442',
    marginLeft: 37,
  },
  view: {
    width: screenWidth / 2,
    marginTop: 10,
    justifyContent: 'center',
  },
});

export default class percent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.view}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={[styles.circle, {backgroundColor: `${this.props.color}`}]}
          />
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
        {this.props.percent === 'NaN' ? null : (
          <Text style={styles.percent}>{this.props.percent}%</Text>
        )}
      </View>
    );
  }
}
