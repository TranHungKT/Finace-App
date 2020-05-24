import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Header from '../../component/Header';
import {connect} from 'react-redux';
import {Icon} from 'native-base';
const color = ['#00AEEF', '#1E3787'];

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    flex: 0.9,
    alignSelf: 'flex-start',
    alignSelf: 'center',
    color: '#3E5463',
  },
  category: {
    paddingTop: 20,
    paddingLeft: 20,
    alignItems: 'center',
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  icon: {
    flex: 0.1,
    color: '#536876',
  },
});

class IncomeCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  selectCategory = (name, id, amount, iconName) => {
    this.props.navigation.navigate('AddIncome', {
      name: name,
      id: id,
      amount: amount,
      icon: iconName,
    });
  };

  render() {
    const {categoryIncome} = this.props;

    let categoryCome = categoryIncome.map((category, id) => (
      <TouchableOpacity
        key={id}
        onPress={() =>
          this.selectCategory(
            category.name,
            category.id,
            category.amount,
            category.iconName,
          )
        }>
        <View key={id} style={styles.category}>
          <Icon name={category.iconName} style={styles.icon} />
          <Text style={styles.title}>{category.name}</Text>
        </View>
      </TouchableOpacity>
    ));

    return (
      <View style={{flex: 1}}>
        <Header headerText={'Income Category'} color={color} />
        {categoryCome}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  categoryIncome: state.expense.categoryIncome,
});

export default connect(mapStateToProps)(IncomeCategory);
