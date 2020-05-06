import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  header: {
    flex: 0.15,
    alignSelf: 'flex-end',
  },
  skipButtonText: {
    fontSize: 20,
    marginRight: 10,
    color: '#1E3787',
  },
  skipButton: {
    flexDirection: 'row',
    marginRight: 20,
  },
  image: {
    flex: 0.3,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  background: {
    width: screenWidth - 30,
    height: screenHeight / 2.5,
    zIndex: 99,
  },
  text: {
    flex: 0.4,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1E3787',
    marginBottom: 20,
  },
  textIntro: {
    fontSize: 20,
    color: '#7E8998',
  },
  shaddow: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: -110,
    height: 400,
  },
  nextButton: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    right: 20,
  },
  currentPage: {
    alignSelf: 'flex-start',
    position: 'absolute',
    position: 'absolute',
    bottom: 40,
    left: 20,
  },
});
