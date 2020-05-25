import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Icon, Button} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';

import {connect} from 'react-redux';
import {saveCategoryIncome} from '../../redux/action/expenseAction';
import Header from '../../component/Header';
const screenWidth = Math.round(Dimensions.get('window').width);

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
    alignItems: 'center',
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

const color = ['#00AEEF', '#1E3787'];

class AddIncome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectCategory: 'Select Category',
      selectColor: 'Select Color',
      amount: '',
      error: '',
    };
  }

  save = (idMain, amount) => {
    if (amount == '') {
      return this.setState({error: 'Please chose category or set amount'});
    } else {
      this.setState({error: ''});
      this.props.saveCategoryIncome(idMain, amount);
      this.props.navigation.navigate('Income');
    }
  };

  render() {
    const {navigation} = this.props;
    let iconCategory = navigation.state.params ? (
      <Icon
        name={navigation.state.params.icon}
        style={[styles.icon, {color: '#536876'}]}
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
    let idMain = navigation.state.params ? navigation.state.params.id : null;

    return (
      <ScrollView style={{flex: 1}}>
        <Header headerText={'Add Income'} color={color} />
        <View style={styles.select}>
          <Text style={styles.textName}>Category Name</Text>
          <TouchableOpacity
            style={styles.dotted}
            onPress={() => {
              navigation.navigate('IncomeCategory');
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
          <Button
            style={styles.button}
            onPress={() => this.save(idMain, this.state.amount)}>
            <Text style={styles.text}>Save</Text>
          </Button>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  expense: state.expense,
});

export default connect(mapStateToProps, {saveCategoryIncome})(AddIncome);
