import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  StatusBar,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {ScrollView} from 'react-native-gesture-handler';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../component/Header';
const headerBackground = require('../../assets/icon/drawable-mdpi/Budget/QuizDetail/headerBackground.png');
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
    marginLeft: 10,
    marginTop: 20,
  },
  name: {
    flex: 0.1,
    marginTop: 20,
  },
  title: {
    fontSize: 12,
    marginLeft: 10,
    color: '#C0C9D5',
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#DCE1E8',
    marginHorizontal: 10,
    fontSize: 14,
  },
  rectangle: {
    width: 500,
    height: 5,
    alignSelf: 'center',
    marginTop: 50,
  },
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
  icon: {
    marginRight: 10,
  },
  textChangePassword: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  changePassword: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 40,
  },
});

const color = ['#00AEEF', '#1E3787'];

export default class StudentInfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
      name: '',
      idNumber: '',
      email: '',
      changePassword: false,
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
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

  togglePassword = () => {
    this.setState((prevState) => ({changePassword: !prevState.changePassword}));
  };

  render() {
    let Password =
      this.state.changePassword == false ? (
        <View style={{flexDirection: 'row'}}>
          <Icon name="ios-radio-button-off" style={styles.icon} />
          <Text style={styles.textChangePassword}>Change Password</Text>
        </View>
      ) : (
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="md-radio-button-on"
            style={[styles.icon, {color: '#1E3787'}]}
          />
          <Text style={styles.textChangePassword}>Change Password</Text>
        </View>
      );
    let input =
      this.state.changePassword == false ? null : (
        <>
          <Input
            title={'Current Password'}
            textState={this.state.currentPassword}
          />
          <Input title={'New Password'} textState={this.state.newPassword} />
          <Input
            title={'Confirm Password'}
            textState={this.state.confirmPassword}
          />
        </>
      );

    return (
      <ScrollView style={{flex: 1}}>
        <Header headerText={'Student Infor'} color={color} />
        <Icon
          name="ios-arrow-back"
          style={{position: 'absolute', left: 20, top: 30, color: '#fff'}}
          onPress={() => this.props.navigation.navigate('Profile')}
        />
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

        <Input title={'Full Name'} textState={this.state.name} />
        <Input title={'ID Number'} textState={this.state.idNumber} />
        <Input title={'Email'} textState={this.state.email} />
        <View style={{flex: 0.05}}>
          <Image source={rectangle} style={styles.rectangle} />
        </View>
        <View style={{flex: 0.5}}>
          <TouchableOpacity
            style={styles.changePassword}
            onPress={this.togglePassword}>
            {1 && Password}
          </TouchableOpacity>
          {1 && input}
        </View>
      </ScrollView>
    );
  }
}

class Input extends Component {
  render() {
    const {title, textState} = this.props;
    return (
      <View style={styles.name}>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          value={textState}
          onChangeText={(textState) => this.setState({textState})}
          style={styles.input}
        />
      </View>
    );
  }
}
