import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

//Redux
import {connect} from 'react-redux';

import {Icon} from 'native-base';

const checkcircle = require('../../../../assets/icon/drawable-mdpi/Budget/QuizDetail/checkcircle.png');
const timecircle = require('../../../../assets/icon/drawable-mdpi/Budget/QuizDetail/timecircle.png');

const styles = StyleSheet.create({
  circle: {
    height: 20,
    width: 20,
  },
  question: {
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
  },
  questionText: {
    fontSize: 12,
    color: '#1E3787',
  },
  question1: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 10,
    color: '#203442',
  },
  option: {
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
  optionText: {
    color: 'black',
  },
});

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {questions, answer, questionNumber} = this.props;
    let circle =
      questions[questionNumber].answer == answer[questionNumber] ? (
        <Icon
          name="ios-checkmark-circle"
          style={{fontSize: 15, color: 'green'}}
        />
      ) : (
        <Icon name="ios-close-circle" style={{fontSize: 15, color: 'red'}} />
      );
    let options = questions[questionNumber].options;
    let result = options.map((option, index) =>
      // Check coi câu đó có đúng không
      questions[questionNumber].answer == answer[questionNumber] ? (
        // Khi câu trả lời đúng. Kiểm tra xem có trùng với option hiện tại không
        option === answer[questionNumber] ? (
          // Đã trùng với option hiện tại nên background màu xanh
          <View
            key={index}
            style={[styles.option, {backgroundColor: '#06A77D'}]}>
            <Text style={styles.optionText}>{option}</Text>
          </View>
        ) : (
          // Không trùng option hiện tại nên background màu trắng
          <View key={index} style={[styles.option, {backgroundColor: '#fff'}]}>
            <Text style={styles.optionText}>{option}</Text>
          </View>
        )
      ) : // Khi câu trả lời sai, Kiểm tra option có trùng câu trả lời của chính mình không
      option === answer[questionNumber] ? (
        //Nếu trùng thì background màu đỏ
        <View key={index} style={[styles.option, {backgroundColor: '#FF5C5E'}]}>
          <Text style={styles.optionText}>{option}</Text>
        </View>
      ) : // Kiểm tra option có trùng đáp án chính thức không
      option === questions[questionNumber].answer ? (
        // Nếu trùng thì chữ màu xanh
        <View key={index} style={styles.option}>
          <Text style={[styles.optionText, {color: '#06A77D'}]}>{option}</Text>
        </View>
      ) : (
        // Không trùng thì background bình thường
        <View key={index} style={[styles.option, {backgroundColor: '#fff'}]}>
          <Text style={styles.optionText}>{option}</Text>
        </View>
      ),
    );

    return (
      <View>
        <View style={styles.question}>
          <Text style={styles.questionText}>
            {circle} QUESTION 0{questionNumber + 1}
          </Text>
          <Text style={styles.question1}>
            {questions[questionNumber].question}
          </Text>
          {1 && result}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.user.questions,
  answer: state.user.answer,
});

export default connect(mapStateToProps)(Result);
