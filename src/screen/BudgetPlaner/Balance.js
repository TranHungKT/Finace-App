import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Weekly from './component/Weekly';
import {connect} from 'react-redux';
import ListBalance from './component/ListBalance';

const styles = StyleSheet.create({
  income: {
    marginTop: 10,
    flex: 0.3,
  },
  title: {
    flex: 0.15,
    flexDirection: 'row',
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  titleText: {
    fontSize: 16,
    flex: 0.8,
    color: '#203442',
  },
  amountText: {
    flex: 0.2,
    color: '#06A77D',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  detail: {
    marginLeft: 20,
    paddingTop: 10,
    flex: 1 - 0.15,
  },
  summary: {
    flex: 0.1,
    borderTopWidth: 1,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  textSummary: {
    flex: 0.8,
    color: '#203442',
    fontSize: 16,
  },
  amountSummary: {
    flex: 0.2,
    textAlign: 'center',
    fontSize: 16,
  },
});

class Balance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {categories, categoryIncome} = this.props;
    const dataExpense = [
      {
        key: 2,
        id: '2',
        amount: +categories[2].amount,
        state: categories[2].state,
        name: categories[2].name,
      },
      {
        key: 1,
        id: '1',
        amount: +categories[1].amount,
        state: categories[1].state,
        name: categories[1].name,
      },
      {
        key: 0,
        id: '0',
        amount: categories[0].amount,
        state: categories[0].state,
        name: categories[0].name,
      },
    ];
    const dataIncome = [
      {
        key: 3,
        id: '3',
        amount: +categoryIncome[0].amount,
        name: categoryIncome[0].name,
        state: categoryIncome[0].state,
      },
      {
        key: 4,
        id: '4',
        amount: +categoryIncome[1].amount,
        name: categoryIncome[1].name,
        state: categoryIncome[1].state,
      },
      {
        key: 5,
        id: '5',
        amount: +categoryIncome[2].amount,
        name: categoryIncome[2].name,
        state: categoryIncome[2].state,
      },
      {
        key: 6,
        id: '6',
        amount: +categoryIncome[3].amount,
        name: categoryIncome[3].name,
        state: categoryIncome[3].state,
      },
      {
        key: 7,
        id: '7',
        amount: +categoryIncome[4].amount,
        name: categoryIncome[4].name,
        state: categoryIncome[4].state,
      },
      {
        key: 8,
        id: '8',
        amount: +categoryIncome[5].amount,
        name: categoryIncome[5].name,
        state: categoryIncome[5].state,
      },
      {
        key: 9,
        id: '9',
        amount: +categoryIncome[6].amount,
        name: categoryIncome[6].name,
        state: categoryIncome[6].state,
      },
      {
        key: 10,
        id: '10',
        amount: +categoryIncome[7].amount,
        name: categoryIncome[7].name,
        state: categoryIncome[7].state,
      },
    ];
    let sumExpense =
      +categories[0].amount + +categories[1].amount + +categories[2].amount;
    let sumIncome = 0;
    for (let i = 0; i < categoryIncome.length; i += 1) {
      sumIncome += categoryIncome[i].amount;
    }
    let tick =
      sumExpense - sumIncome > 0 ? (
        <Text style={styles.amountSummary}>-${sumExpense - sumIncome}</Text>
      ) : (
        <Text style={styles.amountSummary}>+${sumIncome - sumExpense}</Text>
      );
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 0.15}}>
          <Weekly />
        </View>
        <View style={styles.income}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Income</Text>
            <Text style={styles.amountText}>+${sumIncome}</Text>
          </View>
          <View style={styles.detail}>
            <FlatList
              data={dataIncome}
              renderItem={({item}) => (
                <ListBalance
                  name={item.name}
                  amount={item.amount}
                  state={item.state}
                  color={item.key}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
        <View style={styles.income}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Expense</Text>
            <Text style={[styles.amountText, {color: '#FF5C5E'}]}>
              -${sumExpense}
            </Text>
          </View>
          <View style={styles.detail}>
            <FlatList
              data={dataExpense}
              renderItem={({item}) => (
                <ListBalance
                  name={item.name}
                  amount={item.amount}
                  state={item.state}
                  color={item.key}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
        <View style={styles.summary}>
          <Text style={styles.textSummary}>Summary</Text>
          {tick}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.expense.categories,
  categoryIncome: state.expense.categoryIncome,
});

export default connect(mapStateToProps)(Balance);
