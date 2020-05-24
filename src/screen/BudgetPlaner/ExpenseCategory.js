import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icon} from 'native-base';
import Header from '../../component/Header';
import {selectCategory} from '../../redux/action/expenseAction';
import {connect} from 'react-redux';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const color = ['#00AEEF', '#1E3787'];
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
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  child: {
    // padding: 10,
    flexDirection: 'row',
    marginLeft: 30,
  },
  title: {
    fontSize: 18,
    flex: 0.9,
    alignSelf: 'flex-start',
    alignSelf: 'center',
  },
  icon: {
    flex: 0.1,
  },
  border: {
    borderBottomWidth: 1,
    borderColor: '#C0C9D5',
    marginHorizontal: 20,
  },
  dotted: {},
});

const header = require('../../assets/icon/drawable-mdpi/Budget/Planner/Bill/header.png');
const path = require('../../assets/icon/drawable-mdpi/Budget/Planner/path.png');
class ExpenseCategory extends Component {
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

  choseCategory = (idMain, idChild, iconName, childName) => {
    // this.props.selectCategory(idMain, idChild);
    this.props.navigation.navigate('AddExpense', {
      name: `${childName}`,
      icon: `${iconName}`,
      idMain: idMain,
      idChild: idChild,
    });
  };

  render() {
    const {categories} = this.props;
    let category = categories.map((category, id) => (
      <TouchableOpacity key={id} onPress={() => this.toggleCategories(id)}>
        <View key={id} style={styles.category}>
          <Icon name={category.iconName} style={{flex: 0.1}} />
          <Text style={styles.title}>{category.name}</Text>
          <Icon style={styles.icon} name="ios-arrow-down" />
        </View>

        {this.state.open[id] == true
          ? categories[id].children.map((child, id) => (
              <TouchableOpacity
                key={id}
                style={styles.child}
                onPress={() =>
                  this.choseCategory(
                    category.id,
                    child.id,
                    child.iconName,
                    child.name,
                  )
                }>
                <Image
                  source={path}
                  style={{height: 45, width: 1, marginRight: 30}}
                />
                <View style={styles.dotted} />
                <Icon
                  name={child.iconName}
                  style={{marginRight: 20, color: '#3E5463'}}
                />
                <Text style={{color: '#3E5463'}}>{child.name}</Text>
              </TouchableOpacity>
            ))
          : null}
        <View style={styles.border}></View>
      </TouchableOpacity>
    ));
    return (
      <View style={{flex: 1}}>
        <Header headerText={'Expense Category'} color={color} />

        {category}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.expense.categories,
});

export default connect(mapStateToProps, {selectCategory})(ExpenseCategory);
