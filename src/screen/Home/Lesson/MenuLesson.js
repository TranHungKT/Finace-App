import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {Icon, Card, CardItem, Body} from 'native-base';

import {connect} from 'react-redux';
import {retryTest} from '../../../redux/action/userAction';
import Header from '../../../component/Header';

const color = ['#FADB00', '#F18F01'];
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const medal = require('../../../assets/icon/drawable-mdpi/Medal/medal.png');
const medalFail = require('../../../assets/icon/drawable-mdpi/Medal/medalFail.png');

const styles = StyleSheet.create({
  header: {
    height: 130,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  headerBackground: {
    height: 90,
    width: screenWidth,
    flexDirection: 'row',
    // alignContent: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  icon: {
    position: 'absolute',
    left: 20,
    color: '#fff',
  },
  Intro: {
    flex: 0.3,
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: 40,
  },
  textIntro: {
    color: '#536876',
    marginTop: 10,
  },
  lessonList: {
    flex: 0.6,
    marginTop: 30,
  },
  titleLesson: {
    color: '#536876',
    fontSize: 16,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  card: {
    marginLeft: 20,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  question: {
    fontSize: 16,
    marginTop: 20,
  },
  medal: {
    height: 30,
    width: 32,
  },
  circle: {
    height: 20,
    width: 20,
  },
  topic: {
    fontSize: 16,
    color: 'green',
  },
  des: {
    color: '#7E8998',
    fontSize: 14,
  },
});

class MenuLesson extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  back = () => {
    this.props.navigation.navigate('HomeScreen');
  };

  render() {
    const {score} = this.props;
    let medal1 =
      score == false ? null : score >= 2 ? (
        <Image source={medal} style={styles.medal} />
      ) : (
        <Image source={medalFail} style={styles.medal} />
      );

    let circle1 =
      score == false ? (
        <Icon
          name="ios-checkmark-circle"
          style={{fontSize: 15, color: 'green'}}
        />
      ) : (
        <Icon name="ios-radio-button-off" style={{fontSize: 15}} />
      );
    return (
      <View style={{flex: 1}}>
        <Header headerText={'Budgeting'} color={color}></Header>
        <Icon
          name="ios-arrow-back"
          style={{position: 'absolute', left: 20, top: 30, color: '#fff'}}
          onPress={() => this.props.navigation.navigate('HomeScreen')}
        />
        <View style={styles.Intro}>
          <Text>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam
          </Text>
        </View>
        <View style={styles.lessonList}>
          <Text style={styles.titleLesson}>Lesson list</Text>
          <Card style={styles.card}>
            <CardItem
              button
              onPress={() => {
                this.props.retryTest();
                this.props.navigation.navigate('Quiz', {
                  idLesson: 0,
                });
              }}>
              <Body>
                <Text style={styles.topic}>
                  {circle1} Lesson 1 {medal1}
                </Text>
                <Text style={styles.question}>
                  How Do My Partner and I Merge Our Finances, While Keeping Our
                  Autonomy?
                </Text>
                <Text style={styles.des}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod?
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body></Body>
            </CardItem>
          </Card>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.user.score,
});

export default connect(mapStateToProps, {retryTest})(MenuLesson);
