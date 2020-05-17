import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const styles = StyleSheet.create({
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
    paddingLeft: 10,
  },
  textPercent: {
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
    textAlign: 'center',
  },
});
const background = require('../../../assets/icon/drawable-mdpi/Budget/Home/background.png');

export default class Budget extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {score} = this.props;
    return (
      <View style={styles.cardButton}>
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
              progressColor={'#9C8080'}
              strokeWidth={5}></ProgressCircle>
            <Text style={styles.textPercent}>
              {parseInt((score * 100) / 3)}%
            </Text>
          </View>

          <View style={styles.body}>
            <Text
              style={[styles.textBudget, {fontWeight: 'bold', fontSize: 20}]}>
              Budgeting
            </Text>
            <Text style={styles.textBudget}>
              A plan that outlines an organization's financial and operational
              goals
            </Text>
            <Text style={[styles.textBudget, {marginTop: 20}]}>
              3/6 lessons completed
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
