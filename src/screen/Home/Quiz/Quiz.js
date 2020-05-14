import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Card, CardItem, Body, Button} from 'native-base';

const screenWidth = Math.round(Dimensions.get('window').width);

//Redux
import {connect} from 'react-redux';
import {submitQuestion} from '../../../redux/action/userAction';

const styles = StyleSheet.create({
  text: {
    flex: 0.2,
    fontSize: 18,
    marginTop: 20,
    color: '#1E3787',
  },
  question: {
    flex: 0.25,
    color: '#203442',
    fontSize: 24,
    fontWeight: '400',
  },
  card: {
    // borderRadius: 40
  },
  textCard: {
    fontSize: 18,
    color: '#7E8998',
    fontWeight: '700',
  },
  nextButton: {
    flex: 0.2,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
    width: screenWidth / 2,
    alignSelf: 'center',
    marginTop: 20,
  },
});

class Quiz extends Component {
  state = {
    myAnswer: '',
    answer: '',
    question: '',
    currentQuestion: 0,
    options: [],
    isEnd: false,
  };

  componentDidMount() {
    this.loadQuestion();
  }

  loadQuestion = () => {
    this.setState(() => {
      return {
        question: this.props.user.questions[this.state.currentQuestion]
          .question,
        options: this.props.user.questions[this.state.currentQuestion].options,
        answer: this.props.user.questions[this.state.currentQuestion].answer,
      };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          question: this.props.user.questions[this.state.currentQuestion]
            .question,
          options: this.props.user.questions[this.state.currentQuestion]
            .options,
          answer: this.props.user.questions[this.state.currentQuestion].answer,
          myAnswer: '',
        };
      });
    }
  }

  answerQuestion = (option) => {
    this.setState({
      myAnswer: option,
      isCheck: true,
    });
  };

  finishTest = () => {
    this.props.submitQuestion(this.state.myAnswer, this.state.currentQuestion);

    this.setState({
      myAnswer: '',
    });
    this.props.navigation.navigate('QuizResult', {
      idLesson: this.props.navigation.state.params.idLesson,
    });
  };

  submitQuestion = () => {
    this.props.submitQuestion(this.state.myAnswer, this.state.currentQuestion);
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      myAnswer: '',
    });
  };
  render() {
    const {question, currentQuestion, answer, options} = this.state;

    const {score} = this.props.user;

    let checkQuestion = options.map((option, index) =>
      this.state.myAnswer !== option ? (
        <View key={index}>
          <Card
            style={{
              elevation: 14,
              backgroundColor: '#eaf6f8',
              borderRadius: 10,
              shadowOffset: {width: 12, height: 12},
              shadowOpacity: 0.3,
              shadowRadius: 3,
              elevation: 1,
              borderWidth: 3,
            }}>
            <CardItem
              button
              bordered={true}
              borderedColor={'#3BAE90'}
              onPress={() => this.answerQuestion(option)}
              style={{
                elevation: 14,
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                shadowOffset: {width: 1, height: 1},
                shadowOpacity: 0,
                shadowRadius: 100,
                elevation: 10,
                borderWidth: 1,
              }}>
              <Body>
                <Text style={styles.textCard}>{option}</Text>
              </Body>
            </CardItem>
          </Card>
        </View>
      ) : (
        <View key={index}>
          <Card>
            <CardItem
              button
              bordered={true}
              borderedColor={'#EBEBEB'}
              onPress={(option) => this.answerQuestion(option)}
              style={{backgroundColor: '#06A77D'}}>
              <Body>
                <Text style={styles.textCard}>{option}</Text>
              </Body>
            </CardItem>
          </Card>
        </View>
      ),
    );

    let submitButton =
      this.props.user.questions[currentQuestion].id + 1 ==
      this.props.user.questions.length ? (
        <Button style={styles.nextButton} onPress={this.finishTest}>
          <Text>Finish</Text>
        </Button>
      ) : (
        <Button style={styles.nextButton} onPress={this.submitQuestion}>
          <Text>Next</Text>
        </Button>
      );

    return (
      <View style={{flex: 1, marginHorizontal: 20}}>
        <Text style={styles.text}>
          QUESTION {this.props.user.questions[currentQuestion].id + 1} OF{' '}
          {this.props.user.questions.length}
        </Text>
        <Text style={styles.question}>{question}</Text>
        {1 && checkQuestion}
        {1 && submitButton}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {submitQuestion})(Quiz);
