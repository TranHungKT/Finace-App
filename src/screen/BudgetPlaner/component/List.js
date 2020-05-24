import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {Icon} from 'native-base';

const datas = [
  'ios-calculator',
  'ios-card',
  'ios-airplane',
  'logo-euro',
  'ios-contacts',
  'ios-alarm',
  'logo-euro',
  'ios-globe',
  'md-happy',
  'md-contacts',
  'md-aperture',
];

const styles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
  title: {
    fontSize: 18,
    color: '#203442',
    marginLeft: 10,
  },
  amount: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.3,
  },
  amountText: {
    fontSize: 18,
    color: '#FF5C5E',
    marginBottom: 20,
  },
  view: {
    borderBottomWidth: 2,
    marginHorizontal: 10,
    flexDirection: 'row',
    borderBottomColor: '#C0C9D5',
    marginTop: 10,
  },
  text: {
    flex: 0.7,
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let list =
      this.props.state == true ? (
        <View style={styles.view}>
          <View style={styles.text}>
            <View
              style={[styles.circle, {backgroundColor: `${this.props.color}`}]}>
              <Icon name={datas[this.props.data]} style={styles.icon} />
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.title}>{this.props.title}</Text>
              <Text style={{marginLeft: 10}}>
                {this.props.expense} expenses
              </Text>
            </View>
          </View>
          <View style={styles.amount}>
            <Text style={styles.amountText}>-${this.props.amount}</Text>
          </View>
        </View>
      ) : null;
    return <View>{list}</View>;
  }
}
