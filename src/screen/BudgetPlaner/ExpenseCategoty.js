import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';

import {connect} from 'react-redux';

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
  category: {
    padding: 20,
    // borderBottomWidth: 1,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  child: {
    padding: 10,
    flexDirection: 'row',
    marginLeft: 20,
  },
  title: {
    fontSize: 18,
    flex: 0.9,
  },
  icon: {
    flex: 0.1,
  },
  border: {
    borderBottomWidth: 1,
    borderColor: '#C0C9D5',
    marginHorizontal: 20,
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
      open: [false, false, false],
    };
  }

  toggleCategories = (id) => {
    const open = this.state.open;
    if (open[id] == true) {
      open[id] = false;
    } else {
      open[id] = true;
    }
    for (let i = 0; i < open.length; i++) {
      if (i !== id) {
        open[i] = false;
      }
    }
    this.setState({open});
  };

  //   select = (id) => {
  //       this.props.navigation.navigate('')
  //   }

  render() {
    const {categories} = this.props;
    let category = categories.map((category, id) => (
      <View key={id}>
        <View key={id} style={styles.category}>
          <Text style={styles.title}>{category.name}</Text>
          <Icon
            style={styles.icon}
            name="ios-arrow-down"
            onPress={() => this.toggleCategories(id)}
          />
        </View>
        {this.state.open[id] == true
          ? categories[id].children.map((child, id) => (
              <TouchableOpacity key={id} style={styles.child}>
                <Icon name={child.iconName} style={{marginRight: 20}} />
                <Text>{child.name}</Text>
                <Text>{id}</Text>
              </TouchableOpacity>
            ))
          : null}
        <View style={styles.border}></View>
      </View>
    ));
    return (
      <View style={{flex: 1}}>
        <ImageBackground source={header} style={styles.header}>
          <Text style={styles.headerText}>Expense Category</Text>
        </ImageBackground>
        {category}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.expense.categories,
});

export default connect(mapStateToProps)(AddExpense);
