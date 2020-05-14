import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import {Icon} from 'native-base';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const styles = StyleSheet.create({
  header: {
    height: 110,
    width: screenWidth,
  },
  headerText: {
    position: 'absolute',
    top: 110 / 2,
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  select: {
    flex: 0.2,
    // marginTop: 20,
    marginLeft: 20,
  },
  dotted: {
    marginTop: 10,
    marginRight: 20,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    flexDirection: 'row',
    borderColor: '#C0C9D5',
  },
  icon: {
    fontSize: 40,
    color: '#00AEEF',
  },
  textName: {
    fontSize: 20,
    color: '#536876',
  },
  time: {
    marginTop: 10,
    marginRight: 20,
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  textInput: {
    borderBottomWidth: 1,
    marginRight: 20,
  },
});

const header = require('../../assets/icon/drawable-mdpi/Budget/Planner/Bill/header.png');

export default class AddExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectCategory: 'Select Category',
      selectColor: 'Select Color',
      amount: '',
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground source={header} style={styles.header}>
          <Text style={styles.headerText}>Add Expense</Text>
        </ImageBackground>
        <View style={styles.select}>
          <Text style={styles.textName}>Category Name</Text>
          <View style={styles.dotted}>
            <Icon
              name="ios-add-circle-outline"
              style={styles.icon}
              onPress={() => this.props.navigation.navigate('ExpenseCategory')}
            />
            <Text style={[styles.textName, {marginLeft: 40}]}>
              Select Category
            </Text>
          </View>
        </View>
        <View style={styles.select}>
          <Text style={styles.textName}>Color</Text>
          <View style={styles.dotted}>
            <Icon name="ios-add-circle-outline" style={styles.icon} />
            <Text style={[styles.textName, {marginLeft: 40}]}>
              Select Color
            </Text>
          </View>
        </View>
        <View style={styles.select}>
          <Text style={styles.textName}>Period of time</Text>
          <View style={styles.time}>
            <Text style={{flex: 0.9}}>Weekly</Text>
            <Icon name="ios-arrow-down" />
          </View>
        </View>
        <KeyboardAvoidingView style={styles.select}>
          <Text style={styles.textName}>Amount</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Amount"
            onChangeText={(amount) => this.setState({amount})}
            value={this.state.amount}></TextInput>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
