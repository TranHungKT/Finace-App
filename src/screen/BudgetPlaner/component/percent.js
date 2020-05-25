import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

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
    width: screenWidth / 3,
  },
  percent: {
    fontSize: 24,
    color: '#203442',
    marginLeft: 37,
  },
  view: {
    marginTop: 10,
    justifyContent: 'center',
    marginRight: 10,
    // marginLeft: 10,
  },
});

export default class percent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let percent =
      this.props.state == true ? (
        <View style={styles.view}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={[styles.circle, {backgroundColor: `${this.props.color}`}]}
            />
            <Text style={styles.title} numberOfLines={1}>
              {this.props.title}
            </Text>
          </View>
          {this.props.percent === 'NaN' ? null : (
            <Text style={styles.percent}>{this.props.percent}%</Text>
          )}
        </View>
      ) : null;
    return <View>{percent}</View>;
  }
}
