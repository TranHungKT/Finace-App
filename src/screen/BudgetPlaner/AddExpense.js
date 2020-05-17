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
import {Icon, Button} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import StudentInfor from '../Profile/StudentInfor';

import {connect} from 'react-redux';
import {saveCategory} from '../../redux/action/expenseAction';

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
    marginTop: 20,
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
    fontSize: 30,
    color: '#00AEEF',
  },
  textName: {
    fontSize: 16,
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
  button: {
    marginHorizontal: 20,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop: 40,
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

const header = require('../../assets/icon/drawable-mdpi/Budget/Planner/Bill/header.png');

class AddExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectCategory: 'Select Category',
      selectColor: 'Select Color',
      amount: '',
      error: '',
    };
  }

  save = (idMain, idChild, amount) => {
    if (idChild == null || amount == null) {
      return this.setState({error: 'Please chose category or set amount'});
    } else {
      this.setState({error: ''});
      this.props.saveCategory(idMain, idChild, amount);
      this.props.navigation.navigate('Expense');
    }
  };

  render() {
    const {navigation} = this.props;
    let iconCategory = navigation.state.params ? (
      <Icon
        name={navigation.state.params.icon}
        style={[styles.icon, {color: 'black'}]}
      />
    ) : (
      <Icon name="ios-add-circle-outline" style={styles.icon} />
    );
    let nameCategory = (
      <Text style={[styles.textName, {marginLeft: 40}]}>
        {navigation.state.params ? (
          `${navigation.state.params.name}`
        ) : (
          <Text>Select Category</Text>
        )}
      </Text>
    );
    let idMain = navigation.state.params
      ? navigation.state.params.idMain
      : null;
    let idChild = navigation.state.params
      ? navigation.state.params.idChild
      : null;
    return (
      <View style={{flex: 1}}>
        <ImageBackground source={header} style={styles.header}>
          <Text style={styles.headerText}>Add Expense</Text>
        </ImageBackground>
        <View style={styles.select}>
          <Text style={styles.textName}>Category Name</Text>
          <TouchableOpacity
            style={styles.dotted}
            onPress={() => {
              navigation.navigate('ExpenseCategory');
            }}>
            {iconCategory}
            {nameCategory}
          </TouchableOpacity>
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
          {<Text style={{color: 'red'}}>{this.state.error}</Text>}
        </KeyboardAvoidingView>
        <View>
          <Button
            style={styles.button}
            onPress={() => this.save(idMain, idChild, this.state.amount)}>
            <Text style={styles.text}>Save</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  expense: state.expense,
});

export default connect(mapStateToProps, {saveCategory})(AddExpense);
