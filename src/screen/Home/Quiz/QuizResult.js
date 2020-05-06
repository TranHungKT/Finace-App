import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {Button} from 'native-base';
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
          <Text style={styles.resultText}>Questions</Text>
          <View style={{flex: 0.3}}></View>
          <Text style={styles.resultNumber}>3</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.resultText}>Correct Answers</Text>
          <View style={{flex: 0.3}}></View>
          <Text style={styles.resultNumber}>{score}</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.resultText}>Incorrect Answers</Text>
          <View style={{flex: 0.3}}></View>
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
    fontSize: 24,
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
    flex: 0.6,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 24,
  },
  resultNumber: {
    flex: 0.1,
    alignSelf: 'center',
    fontSize: 24,
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
    borderWidth: 3,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  textButtonSmall: {
    fontSize: 30,
    color: '#375AC0',
    fontFamily: 'Poppins',
  },
  buttonBig: {
    width: screenWidth / 2,
    borderRadius: 55,
    height: 50,
    justifyContent: 'center',
  },
  textButtonBig: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
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
