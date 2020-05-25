import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Icon, Button} from 'native-base';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {PieChart} from 'react-native-svg-charts';
import Percent from './component/percent';
import {connect} from 'react-redux';
import List from './component/List';

const styles = StyleSheet.create({
  time: {
    flex: 0.1,
    margin: 20,
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    color: '#1E3787',
    fontSize: 70,
    position: 'absolute',
    bottom: 30,
    right: 10,
  },
  chart: {
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FF5C5E',
    alignSelf: 'center',
    marginTop: 60,
  },
  text1: {
    fontSize: 12,
    alignSelf: 'center',
    color: '#536876',
  },
  percent: {
    flex: 0.2,
    flexDirection: 'row',
  },
  percent1: {
    flex: 0.2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#536876',
    marginLeft: 15,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E3787',
  },
  textButton: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
});

class Expense extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {categories} = this.props;
    let sumAmount =
      +categories[0].amount + +categories[1].amount + +categories[2].amount;
    sumAmount = parseInt(sumAmount);
    const datas = [
      {
        key: 2,
        id: '2',
        amount: +categories[2].amount,
        state: categories[2].state,
        svg: {fill: '#01ACEB'},
        expense: categories[2].expense,
        name: categories[2].name,
        percent: Math.round((+categories[2].amount / +sumAmount) * 100),
      },
      {
        key: 1,
        id: '1',
        amount: +categories[1].amount,
        state: categories[1].state,
        svg: {fill: '#ED8D02'},
        expense: categories[1].expense,
        name: categories[1].name,
        percent: Math.round((+categories[1].amount / +sumAmount) * 100),
      },

      {
        key: 0,
        id: '0',
        amount: categories[0].amount,
        state: categories[0].state,
        svg: {fill: '#07A57C'},
        expense: categories[0].expense,
        name: categories[0].name,
        percent: Math.round((+categories[0].amount / +sumAmount) * 100),
      },
    ];

    return (
      <>
        <ScrollView style={{flex: 1}}>
          <View style={styles.time}>
            <Text style={{flex: 0.9}}>Weekly</Text>
            <Icon name="ios-arrow-down" />
          </View>
          <PieChart
            style={styles.chart}
            valueAccessor={({item}) => item.amount}
            data={datas}
            spacing={0}
            outerRadius={'100%'}
            innerRadius={'63%'}>
            <Text style={styles.text}>-${sumAmount}</Text>
            <Text style={styles.text1}>Total Expense</Text>
          </PieChart>
          <View style={styles.percent}>
            <FlatList
              data={datas}
              renderItem={({item}) => (
                <Percent
                  color={item.svg.fill}
                  title={item.name}
                  percent={item.percent}
                  state={item.state}
                />
              )}
              horizontal={false}
              numColumns={2}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={{flex: 0.4, marginTop: 10}}>
            <Text style={styles.title}>Expense List</Text>
            <FlatList
              data={datas}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Detail', {
                      icon: item.key,
                    })
                  }>
                  <List
                    title={item.name}
                    amount={item.amount}
                    color={item.svg.fill}
                    state={item.state}
                    expense={item.expense}
                    icon={item.key}
                  />
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ScrollView>
        <Button
          style={styles.button}
          onPress={() => this.props.navigation.navigate('ExpenseCategory')}
          title="">
          <Text style={styles.textButton}>+</Text>
        </Button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.expense.categories,
});

export default connect(mapStateToProps)(Expense);
