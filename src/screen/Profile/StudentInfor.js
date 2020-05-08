import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {ScrollView} from 'react-native-gesture-handler';

const header = require('../../assets/icon/drawable-mdpi/Profile/Information/header.png');
const defaultImage = require('../../assets/icon/drawable-mdpi/Profile/Information/defaultimage.png');
const rectangle = require('../../assets/icon/drawable-mdpi/Profile/Information/Rectangle.png');
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
  avatarContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 75,
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  changeProfileText: {
    color: '#00AEEF',
    fontSize: 16,
  },
  Profile: {
    flex: 0.05,
    marginLeft: 40,
    marginTop: 20,
  },
  name: {
    flex: 0.1,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    marginLeft: 40,
    color: '#C0C9D5',
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 3,
    borderBottomColor: '#DCE1E8',
    marginHorizontal: 40,
    fontSize: 14,
  },
  rectangle: {
    width: 500,
    height: 5,
    alignSelf: 'center',
    marginTop: 50,
  },
});

export default class StudentInfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
      name: '',
      idNumber: '',
      email: '',
    };
    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
  }
  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
      noData: true,
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};
        this.setState({
          avatarSource: source,
        });
      }
    });
  }
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.header}>
          <Image source={header} style={styles.headerImage} />
        </View>
        <View style={styles.avatarContainer}>
          {this.state.avatarSource == null ? (
            <>
              <Image source={defaultImage} style={styles.avatar} />
              <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                <Text style={styles.changeProfileText}>
                  Change profile information
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Image source={this.state.avatarSource} style={styles.avatar} />
              <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                <Text style={styles.changeProfileText}>
                  Change profile information
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
        <View style={styles.Profile}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Profile</Text>
        </View>

        <View style={styles.name}>
          <Text style={styles.title}>Full Name</Text>
          <TextInput
            value={this.state.name}
            onChangeText={(name) => this.setState({name})}
            style={styles.input}
          />
        </View>
        <View style={styles.name}>
          <Text style={styles.title}>ID Number</Text>
          <TextInput
            value={this.state.idNumber}
            onChangeText={(idNumber) => this.setState({idNumber})}
            style={styles.input}
          />
        </View>
        <View style={styles.name}>
          <Text style={styles.title}>Email</Text>
          <TextInput
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
            style={styles.input}
          />
        </View>
        <View style={{flex: 0.05}}>
          <Image source={rectangle} style={styles.rectangle} />
        </View>
      </ScrollView>
    );
  }
}
