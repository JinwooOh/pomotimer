import { StyleSheet, Platform, Dimensions } from 'react-native';

const screen = Dimensions.get('window');
const primary = '#FFC75F';
const secondary = '#20887A';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
  },
  timer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  setting: {
    flexWrap: 'wrap',
    textAlign: 'center',
    flex: 1,
    padding: 10,
  },
  settingHeader: {
    color: '#402E32',
    fontSize: 90,
    textAlign: 'center',
  },
  settingOption: {
    margin: 10,
  },
  settingText: {
    fontSize: 20,
  },

  button: {
    borderWidth: 10,
    borderColor: secondary,
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  buttonStop: {
    borderColor: '#C1554D',
  },
  buttonText: {
    fontSize: 45,
    color: secondary,
  },
  buttonTextStop: {
    color: '#C1554D',
  },
  timerText: {
    color: '#402E32',
    fontSize: 90,
  },
  reset: {
    borderWidth: 4,
    borderColor: '#C1554D',
    borderRadius: 10,
    width: 100,
    height: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  resetText: {
    fontSize: 30,
    color: '#C1554D',
  },
  bottom: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 36,
  },
  targetInfoText: {
    // flex: 1,
    // justifyContent: 'flex-end',
    color: '#402E32',
    fontSize: 20,
  },
});

export default styles;
