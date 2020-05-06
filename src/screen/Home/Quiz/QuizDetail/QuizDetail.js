import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Result from './Result';
import {Button} from 'native-base';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  header: {
    flex: 0.15,
  },
  headerBackground: {
    height: screenHeight / 10,
    width: screenWidth,
  },
  button: {
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 45,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

const header = require('../../../../assets/icon/drawable-mdpi/Budget/QuizDetail/header.png');

const datas = [0, 1, 2];

export default class QuizDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Image source={header} style={styles.headerBackground} />
        </View>
        <ScrollView style={{flex: 0.85}}>
          {datas.map((data) => (
            <Result questionNumber={data} key={data} />
          ))}
          <Button style={styles.button}>
            <Text style={styles.buttonText}>Finish</Text>
          </Button>
        </ScrollView>
      </View>
    );
  }
}
