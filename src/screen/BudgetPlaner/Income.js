import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  YellowBox,
  Dimensions,
} from 'react-native';
import {Icon, Button} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import {PieChart} from 'react-native-svg-charts';
import Percent from './component/percent';
import {connect} from 'react-redux';
import Weekly from './component/Weekly';
import List from './component/List';
YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);
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
    color: '#0DBF8F',
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

class Income extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {categoryIncome} = this.props;
    let sumAmount = 0;
    for (let i = 0; i < categoryIncome.length; i += 1) {
      sumAmount += categoryIncome[i].amount;
    }
    sumAmount = parseInt(sumAmount);
    const datas = [
      {
        key: 3,
        id: '3',
        amount: +categoryIncome[0].amount,
        name: categoryIncome[0].name,
        state: categoryIncome[0].state,
        percent: Math.round((+categoryIncome[0].amount / +sumAmount) * 100),
        svg: {fill: '#F2B63D'},
      },
      {
        key: 4,
        id: '4',
        amount: +categoryIncome[1].amount,
        name: categoryIncome[1].name,
        state: categoryIncome[1].state,
        percent: Math.round((+categoryIncome[1].amount / +sumAmount) * 100),
        svg: {fill: '#8B72DE'},
      },
      {
        key: 5,
        id: '5',
        amount: +categoryIncome[2].amount,
        name: categoryIncome[2].name,
        state: categoryIncome[2].state,
        percent: Math.round((+categoryIncome[2].amount / +sumAmount) * 100),
        svg: {fill: '#E34262'},
      },
      {
        key: 6,
        id: '6',
        amount: +categoryIncome[3].amount,
        name: categoryIncome[3].name,
        state: categoryIncome[3].state,
        percent: Math.round((+categoryIncome[3].amount / +sumAmount) * 100),
        svg: {fill: '#555B67'},
      },
      {
        key: 7,
        id: '7',
        amount: +categoryIncome[4].amount,
        name: categoryIncome[4].name,
        state: categoryIncome[4].state,
        percent: Math.round((+categoryIncome[4].amount / +sumAmount) * 100),
        svg: {fill: '#ED8D02'},
      },
      {
        key: 8,
        id: '8',
        amount: +categoryIncome[5].amount,
        name: categoryIncome[5].name,
        state: categoryIncome[5].state,
        percent: Math.round((+categoryIncome[5].amount / +sumAmount) * 100),
        svg: {fill: '#725B2E'},
      },
      {
        key: 9,
        id: '9',
        amount: +categoryIncome[6].amount,
        name: categoryIncome[6].name,
        state: categoryIncome[6].state,
        percent: Math.round((+categoryIncome[6].amount / +sumAmount) * 100),
        svg: {fill: '#01ACEB'},
      },
      {
        key: 10,
        id: '10',
        amount: +categoryIncome[7].amount,
        name: categoryIncome[7].name,
        state: categoryIncome[7].state,
        percent: Math.round((+categoryIncome[7].amount / +sumAmount) * 100),
        svg: {fill: '#2E4372'},
      },
    ];

    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 0.4}}>
          <Weekly />
          <PieChart
            style={styles.chart}
            valueAccessor={({item}) => item.amount}
            data={datas}
            spacing={0}
            outerRadius={'100%'}
            innerRadius={'63%'}>
            <Text style={styles.text}>+${sumAmount}</Text>
            <Text style={styles.text1}>Total Income</Text>
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
              columnWrapperStyle={styles.row}
              keyExtractor={(item) => item.id}
            />
          </View>

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
                  icon={item.key}
                  key={item.key}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ScrollView>
        <Button
          style={styles.button}
          onPress={() => this.props.navigation.navigate('IncomeCategory')}>
          <Text style={styles.textButton}>+</Text>
        </Button>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  categoryIncome: state.expense.categoryIncome,
});

export default connect(mapStateToProps)(Income);
