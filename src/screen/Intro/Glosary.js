import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {styles} from './styles';

const background = require('../../assets/icon/drawable-mdpi/Glosary/Intro/background.png');
const shaddow = require('../../assets/icon/drawable-mdpi/Glosary/Intro/shaddow.png');
const currentPage = require('../../assets/icon/drawable-mdpi/Glosary/Intro/currentPage.png');

import {Icon} from 'native-base';

export default class Glosary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.view}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => this.props.navigation.navigate('MainScreen')}>
            <Text style={styles.skipButtonText}>Skip</Text>
            <Icon name="ios-arrow-forward" style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.image}>
          <ImageBackground
            source={background}
            style={styles.background}
            resizeMode="contain"
          />
        </View>
        <View style={styles.text}>
          <Text style={styles.title}>Glosary</Text>
          <Text style={styles.textIntro}>
            Lorem ipsum dolor sit amet, consetetur
          </Text>
          <Text style={styles.textIntro}>
            sadipscing elitr, sed diam nonumy
          </Text>
          <Text style={styles.textIntro}>
            eirmod tempor invidunt ut labore et.
          </Text>
        </View>
        <View style={{flex: 0.3}}>
          <Image source={shaddow} style={styles.shaddow} />
          <Image source={currentPage} style={styles.currentPage} />
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => this.props.navigation.navigate('DailyGoal')}>
            <Text style={styles.skipButtonText}>Next</Text>
            <Icon name="ios-arrow-forward" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
