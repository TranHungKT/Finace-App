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

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
//image

//Budget
const background = require('../../assets/icon/drawable-mdpi/Budget/Home/background.png');
//Education
const background2 = require('../../assets/icon/drawable-mdpi/Education/Home/backgound2.png');
//Car
const background3 = require('../../assets/icon/drawable-mdpi/car/Home/background3.png');
//Moving
const background4 = require('../../assets/icon/drawable-mdpi/Moving/Home/background4.png');
//Empoyment
const background5 = require('../../assets/icon/drawable-mdpi/Employment/Home/background5.png');

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins',
    fontSize: 26,
    fontWeight: 'bold',
    marginHorizontal: 30,
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
  body: {
    flex: 0.9,
    justifyContent: 'center',
  },
  circle: {
    height: 60,
    width: 60,
    alignSelf: 'center',
  },
  textBudget: {
    color: '#FFFFFF',
  },
  textPercent: {
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
    // textAlign: 'center',
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
            onPress={() => {
              console.log('Hi');
              this.props.navigation.navigate('MenuLesson');
            }}
            style={styles.cardButton}>
            <ImageBackground
              source={background}
              style={{
                width: screenWidth - 20,
                height: screenHeight / 4,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 0.2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ProgressCircle
                  style={[styles.circle]}
                  progress={1 - score / 3}
                  progressColor={'#C5BEBE'}
                  strokeWidth={5}></ProgressCircle>
                <Text style={styles.textPercent}>
                  {parseInt((score * 100) / 3)}%
                </Text>
              </View>

              <View style={styles.body}>
                <Text
                  style={[
                    styles.textBudget,
                    {fontWeight: 'bold', fontSize: 20},
                  ]}>
                  Budgeting
                </Text>
                <Text style={styles.textBudget}>
                  A plan that outlines an organization's financial and
                  operational goals
                </Text>
                <Text style={[styles.textBudget, {marginTop: 20}]}>
                  3/6 lessons completed
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          {/* EDUCATION */}
          <ImageBackground
            source={background2}
            style={{width: screenWidth - 20, height: screenHeight / 4}}
          />
          {/* CAR */}
          <ImageBackground
            source={background3}
            style={{width: screenWidth - 20, height: screenHeight / 4}}
          />
          {/* MOVING */}
          <ImageBackground
            source={background4}
            style={{width: screenWidth - 20, height: screenHeight / 4}}
          />
          {/* EMPLOYMENT */}
          <ImageBackground
            source={background5}
            style={{width: screenWidth - 20, height: screenHeight / 4}}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.user.score,
});

export default connect(mapStateToProps)(HomeScreen);
