import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

import {Icon} from 'native-base';

const header = require('../../assets/icon/drawable-mdpi/Profile/header.png');
const avatar = require('../../assets/icon/drawable-mdpi/Profile/avatar.png');
const medal = require('../../assets/icon/drawable-mdpi/Profile/medal.png');
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  header: {
    flex: 0.15,
  },
  headerImage: {
    width: screenWidth,
    height: screenHeight / 8,
  },
  avatar: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarPicture: {
    height: 150,
    width: 150,
  },
  medal: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  medalPicture: {
    height: 100,
    width: screenWidth - 40,
  },
  button: {
    flex: 0.08,
    borderBottomWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Image source={header} style={styles.headerImage} />
        </View>
        <View style={styles.avatar}>
          <Image
            source={avatar}
            style={styles.avatarPicture}
            resizeMode="contain"
          />
        </View>
        <View style={styles.medal}>
          <Image
            source={medal}
            style={styles.medalPicture}
            resizeMode="contain"
          />
        </View>
        <View style={styles.button}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="ios-book" style={{flex: 0.1, marginLeft: 10}} />
            <Text style={{flex: 0.8, fontSize: 20}}>Lesson History</Text>
            <Icon style={{flex: 0.1}} name="ios-arrow-forward" />
          </View>
        </View>
        <View style={styles.button}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="ios-man" style={{flex: 0.1, marginLeft: 10}} />
            <Text style={{flex: 0.8, fontSize: 20}}>Student Information</Text>
            <Icon
              style={{flex: 0.1}}
              name="ios-arrow-forward"
              onPress={() => {
                this.props.navigation.navigate('StudentInfor');
                console.log('hello');
              }}
            />
          </View>
        </View>
        <View style={styles.button}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="ios-options" style={{flex: 0.1, marginLeft: 10}} />
            <Text style={{flex: 0.8, fontSize: 20}}>
              Entrance Assessment Result
            </Text>
            <Icon style={{flex: 0.1}} name="ios-arrow-forward" />
          </View>
        </View>
        <View style={styles.button}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="ios-options" style={{flex: 0.1, marginLeft: 10}} />
            <Text style={{flex: 0.8, fontSize: 20}}>
              Exit Assessment Result
            </Text>
            <Icon style={{flex: 0.1}} name="ios-arrow-forward" />
          </View>
        </View>
      </View>
    );
  }
}
