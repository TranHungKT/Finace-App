import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'native-base';
// import {TouchableOpacity} from 'react-native-gesture-handler';

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  header: {
    height: 90,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  icon: {
    position: 'absolute',
    left: 10,
    color: '#fff',
  },
});

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goBack = () => {
    console.log('HI');
    this.props.navigation.navigate('HomeScreen');
  };
  render() {
    const {back} = this.props;
    return (
      <LinearGradient
        style={styles.header}
        colors={[`${this.props.color[0]}`, `${this.props.color[1]}`]}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
        <Text style={styles.headerText}>{this.props.headerText}</Text>
      </LinearGradient>
    );
  }
}
