import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../../component/Header';
import Weekly from './component/Weekly';
import {StackedBarChart} from 'react-native-svg-charts';
const color = ['#A8E063', '#0DBF8F'];

import {connect} from 'react-redux';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {params} = this.props.navigation.state;
    const {categories} = this.props;
    let data = params ? params.icon : null;
    const charts = [
      {
        month: new Date(2015, 0, 1),
        apples: 3840,
        bananas: 1920,
        cherries: 960,
        dates: 400,
        oranges: 400,
      },
      // {
      //     month: new Date(2015, 1, 1),
      //     apples: 1600,
      //     bananas: 1440,
      //     cherries: 960,
      //     dates: 400,
      // },
      // {
      //     month: new Date(2015, 2, 1),
      //     apples: 640,
      //     bananas: 960,
      //     cherries: 3640,
      //     dates: 400,
      // },
      // {
      //     month: new Date(2015, 3, 1),
      //     apples: 3320,
      //     bananas: 480,
      //     cherries: 640,
      //     dates: 400,
      // },
    ];

    const colors = ['#7b4173', '#a55194', '#ce6dbd', '#de9ed6'];
    const keys = ['apples', 'bananas', 'cherries', 'dates'];

    return (
      <ScrollView style={{flex: 1}}>
        <Header headerText={categories[data].name} color={color} />
        <Weekly />
        <StackedBarChart
          style={{height: 200}}
          keys={keys}
          colors={colors}
          data={charts}
          showGrid={true}
          contentInset={{top: 30, bottom: 30}}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.expense.categories,
});

export default connect(mapStateToProps)(Detail);
