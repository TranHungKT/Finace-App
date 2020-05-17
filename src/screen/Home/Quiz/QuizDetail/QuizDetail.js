import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Result from './Result';
import {Button} from 'native-base';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  headerText: {
    position: 'absolute',
    top: 100 / 2,
    fontSize: 20,
    color: '#fff',
  },
  headerBackground: {
    height: 110,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  button: {
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 45,
    marginTop: 20,
    backgroundColor: '#1E3787',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

const headerBackground = require('../../../../assets/icon/drawable-mdpi/Budget/QuizDetail/headerBackground.png');

const datas = [0, 1, 2];

export default class QuizDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={headerBackground}
          style={styles.headerBackground}>
          <Text style={styles.headerText}>Quiz Detail</Text>
        </ImageBackground>
        <ScrollView style={{flex: 0.85}}>
          {datas.map((data) => (
            <Result questionNumber={data} key={data} />
          ))}
          <Button
            style={styles.button}
            onPress={() => this.props.navigation.navigate('HomeScreen')}>
            <Text style={styles.buttonText}>Finish</Text>
          </Button>
        </ScrollView>
      </View>
    );
  }
}
