import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {Button, Icon} from 'native-base';
//Redux
import {connect} from 'react-redux';
import {retryTest, submitResult} from '../../../redux/action/userAction';

const medal = require('../../../assets/icon/drawable-mdpi/Medal/medal.png');
const medalFail = require('../../../assets/icon/drawable-mdpi/Medal/medalFail.png');

const screenWidth = Math.round(Dimensions.get('window').width);
class QuizResult extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  retryTest = () => {
    this.props.retryTest();
    this.props.navigation.navigate('HomeScreen');
  };

  submitResult = () => {
    this.props.submitResult(
      this.props.score,
      this.props.navigation.state.params.idLesson,
    );
    this.props.navigation.navigate('QuizDetail');
  };

  render() {
    const {score} = this.props;
    let medalScore =
      score >= 2 ? (
        <>
          <Image source={medal} />
        </>
      ) : (
        <>
          <Image source={medalFail} />
        </>
      );
    let PassText =
      score >= 2 ? (
        <Text style={styles.text}>You've passed lesson</Text>
      ) : (
        <Text style={styles.text}>You haven't passed lesson</Text>
      );
    return (
      <View style={{flex: 1}}>
        <View style={styles.medal}>{medalScore}</View>
        <View style={styles.textPosition}>{PassText}</View>
        <View style={styles.result}>
          <Icon
            name="md-help-circle"
            style={[styles.icon, {color: '#1E3787'}]}
          />
          <Text style={styles.resultText}>Total Questions</Text>
          <View style={{flex: 0.3}}></View>
          <Text style={styles.resultNumber}>3</Text>
        </View>
        <View style={styles.result}>
          <Icon
            name="ios-arrow-dropdown-circle"
            style={[styles.icon, {color: '#FF5C5E'}]}
          />
          <Text style={styles.resultText}>Correct Answers</Text>
          <View style={{flex: 0.2}}></View>
          <Text style={styles.resultNumber}>{score}</Text>
        </View>
        <View style={styles.result}>
          <Icon
            name="ios-close-circle"
            style={[styles.icon, {color: '#1E3787'}]}
          />
          <Text style={styles.resultText}>Incorrect Answers</Text>
          <View style={{flex: 0.2}}></View>
          <Text style={styles.resultNumber}>{3 - score}</Text>
        </View>
        <View style={styles.button}>
          <View style={{flexDirection: 'row'}}>
            <Button style={styles.buttonSmall}>
              <Text style={styles.textButtonSmall} onPress={this.retryTest}>
                Retry
              </Text>
            </Button>
            <Button style={styles.buttonBig} onPress={this.submitResult}>
              <Text style={styles.textButtonBig}>Next</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  medal: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPosition: {
    flex: 0.1,
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    color: '#203442',
  },
  result: {
    flex: 0.1,
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 10,
  },
  resultText: {
    flex: 1,
    alignSelf: 'flex-start',
    alignSelf: 'center',
    fontSize: 16,
  },
  resultNumber: {
    flex: 0.1,
    alignSelf: 'center',
    fontSize: 16,
    color: '#203442',
  },
  button: {
    flex: 0.3,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonSmall: {
    borderRadius: 55,
    height: 50,
    marginHorizontal: 20,
    width: screenWidth / 3,
    borderWidth: 1,
    borderColor: '#1E3787',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  textButtonSmall: {
    fontSize: 20,
    color: '#375AC0',
    fontFamily: 'Poppins',
  },
  buttonBig: {
    width: screenWidth / 2,
    borderRadius: 55,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#1E3787',
  },
  textButtonBig: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
  icon: {
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 5,
    flex: 0.1,
  },
});

const mapStateToProps = (state) => ({
  score: state.user.score,
});

const mapActionToProps = {
  retryTest,
  submitResult,
};

export default connect(mapStateToProps, mapActionToProps)(QuizResult);
