import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {styles} from './styles';

const background = require('../../assets/icon/drawable-mdpi/DailyGoal/Intro/background.png');
const shaddow = require('../../assets/icon/drawable-mdpi/DailyGoal/Intro/shaddow.png');
const currentPage = require('../../assets/icon/drawable-mdpi/DailyGoal/Intro/currentPage.png');

import {Icon} from 'native-base';

export default class DailyGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.view}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.skipButtonText}>Skip</Text>
            <Icon name="ios-arrow-forward" />
          </TouchableOpacity>
        </View>
        <View style={styles.image}>
          <ImageBackground
            source={background}
            style={[styles.background, {height: 360, marginTop: 20}]}
          />
        </View>
        <View style={styles.text}>
          <Text style={styles.title}>Daily goal and Badges</Text>
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
            onPress={() => this.props.navigation.navigate('Lesson')}>
            <Text style={styles.skipButtonText}>Next</Text>
            <Icon name="ios-arrow-forward" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
