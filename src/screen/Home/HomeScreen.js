import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  Left,
  Right,
  Icon,
  Body,
  Header,
  Content,
  Container,
  View,
} from 'native-base';

import {ProgressCircle} from 'react-native-svg-charts';
import {connect} from 'react-redux';

import Budget from './Card/Budget';
import Education from './Card/Education';
import Car from './Card/Car';
import Moving from './Card/Moving';
import Employment from './Card/Employment';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
//image

//Budget

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins',
    fontSize: 26,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  background: {
    height: screenHeight / 4,
    width: screenWidth - 40,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    color: '#fff',
    fontFamily: 'Poppins',
    fontSize: 26,
    marginTop: 30,
    fontWeight: 'bold',
  },
  textDescription: {
    color: '#fff',
    fontFamily: 'Poppins',
    fontSize: 18,
  },
  result: {
    color: '#fff',
    fontFamily: 'Poppins',
    fontSize: 18,
    marginTop: 10,
  },
  left: {
    flex: 0.2,
    marginHorizontal: 10,
    marginBottom: 40,
  },
  right: {
    marginRight: 10,
    marginBottom: -30,
    flex: 0.01,
  },
  card: {
    height: screenHeight / 4,
    width: screenWidth - 40,
  },
  cardButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {score} = this.props;
    return (
      <Container>
        <Header transparent>
          <Left>
            <Icon name="cog" />
          </Left>
          <Body />
          <Right>
            <Icon name="ios-notifications" />
          </Right>
        </Header>
        <Content>
          <Text style={styles.text}>
            Hello. What do you want to learn today?
          </Text>
          {/* BUDGET */}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('MenuLesson')}>
            <Budget score={score} />
          </TouchableOpacity>
          {/* EDUCATION */}
          <Education />
          {/* CAR */}
          <Car />
          {/* MOVING */}
          <Moving />
          {/* Employment */}
          <Employment />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.user.score,
});

export default connect(mapStateToProps)(HomeScreen);
