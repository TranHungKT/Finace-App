import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Icon} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
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
});

class Income extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {categoryIncome} = this.props;
    const datas = [
      {
        key: 0,
        amount: +categoryIncome[0].amount,
        name: categoryIncome[0].name,
        state: categoryIncome[0].state,
        svg: {fill: '#F2B63D'},
      },
      {
        key: 1,
        amount: +categoryIncome[1].amount,
        name: categoryIncome[1].name,
        state: categoryIncome[1].state,
        svg: {fill: '#8B72DE'},
      },
      {
        key: 2,
        amount: +categoryIncome[2].amount,
        name: categoryIncome[2].name,
        state: categoryIncome[2].state,
        svg: {fill: '#E34262'},
      },
      {
        key: 3,
        amount: +categoryIncome[3].amount,
        name: categoryIncome[3].name,
        state: categoryIncome[3].state,
        svg: {fill: '#555B67'},
      },
      {
        key: 4,
        amount: +categoryIncome[4].amount,
        name: categoryIncome[4].name,
        state: categoryIncome[4].state,
        svg: {fill: '#ED8D02'},
      },
      {
        key: 5,
        amount: +categoryIncome[5].amount,
        name: categoryIncome[5].name,
        state: categoryIncome[5].state,
        svg: {fill: '#725B2E'},
      },
      {
        key: 6,
        amount: +categoryIncome[6].amount,
        name: categoryIncome[6].name,
        state: categoryIncome[6].state,
        svg: {fill: '#01ACEB'},
      },
      {
        key: 7,
        amount: +categoryIncome[7].amount,
        name: categoryIncome[7].name,
        state: categoryIncome[7].state,
        svg: {fill: '#2E4372'},
      },
    ];
    let sumAmount = 0;
    let percent = [];
    let amountArray = [];
    for (let i = 0; i < categoryIncome.length; i += 1) {
      sumAmount += categoryIncome[i].amount;
      amountArray = [...amountArray, categoryIncome[i].amount];
    }
    sumAmount = parseInt(sumAmount);
    for (let j = 0; j < categoryIncome.length; j += 1) {
      let tempPercent = Math.round(
        (+this.props.categoryIncome[j].amount / +sumAmount) * 100,
      );
      percent = [...percent, tempPercent];
    }

    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 0.4}}>
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
            <Text style={styles.text}>${sumAmount}</Text>
            <Text style={styles.text1}>Total Income</Text>
          </PieChart>
          {/* <FlatList 
            data = {percent}
            renderItem = {({item}) =>(
              <Percent color = {'red'} title = {item}
            )}
          /> */}

          <View style={{flex: 0.4, marginTop: 10}}>
            <Text style={styles.title}>Expense List</Text>
            <FlatList
              data={datas}
              renderItem={({item}) => (
                <List
                  title={item.name}
                  amount={item.amount}
                  color={item.svg.fill}
                  state={item.state}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
          <Icon
            name="ios-add-circle"
            large
            style={styles.addButton}
            onPress={() => this.props.navigation.navigate('AddIncome')}
          />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  categoryIncome: state.expense.categoryIncome,
});

export default connect(mapStateToProps)(Income);
