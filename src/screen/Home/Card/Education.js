import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Button,
  TouchableHighlight,
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
const background = require('../../../assets/icon/drawable-mdpi/Education/Home/background2.png');
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
            <TouchableHighlight
              style={{
                borderRadius: 30,
                width: 60,
                height: 60,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              underlayColor="#ccc"
              onPress={() => alert('Yaay!')}>
              <Text></Text>
            </TouchableHighlight>
          </View>

          <View style={styles.body}>
            <Text
              style={[styles.textBudget, {fontWeight: 'bold', fontSize: 20}]}>
              Education Fees
            </Text>
            <Text style={styles.textBudget}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
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
