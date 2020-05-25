import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
import {Icon} from 'native-base';

const icons = [
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
    alignContent: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
  title: {
    fontSize: 14,
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
  titleView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
        this.props.icon < 3 ? (
          <View style={styles.view}>
            <View style={styles.text}>
              <View
                style={[
                  styles.circle,
                  {backgroundColor: `${this.props.color}`},
                ]}>
                <Icon name={icons[this.props.icon]} style={styles.icon} />
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
        ) : (
          <View style={styles.view}>
            <View style={styles.text}>
              <View
                style={[
                  styles.circle,
                  {backgroundColor: `${this.props.color}`},
                ]}>
                <Icon name={icons[this.props.icon]} style={styles.icon} />
              </View>
              <View style={styles.titleView}>
                <Text
                  style={[styles.title, {fontSize: 14, width: screenWidth / 2}]}
                  numberOfLines={1}>
                  {this.props.title}
                </Text>
              </View>
            </View>
            <View style={styles.amount}>
              <Text style={[styles.amountText, {color: '#06A77D'}]}>
                +${this.props.amount}
              </Text>
            </View>
          </View>
        )
      ) : null;
    return <View>{list}</View>;
  }
}
