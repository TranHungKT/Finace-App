import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 0.15,
    flexDirection: 'row',
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderLeftWidth: 2,
    paddingLeft: 10,
    paddingTop: 10,
  },
  amount: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  name: {
    flex: 0.8,
    color: '#7E8998',
    fontSize: 14,
  },
});

export default class ListBalance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let list =
      this.props.state == true ? (
        this.props.color < 3 ? (
          <View style={[styles.view, {borderLeftColor: '#FF5C5E'}]}>
            <Text style={styles.name}>{this.props.name}</Text>
            <Text style={styles.amount}>-${this.props.amount}</Text>
          </View>
        ) : (
          <View style={[styles.view, {borderLeftColor: '#06A77D'}]}>
            <Text style={styles.name} numberOfLines={1}>
              {this.props.name}
            </Text>
            <Text style={styles.amount}>+${this.props.amount}</Text>
          </View>
        )
      ) : null;
    return <View>{list}</View>;
  }
}
