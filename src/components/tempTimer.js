import React, { Component, useContext, useEffect } from 'react';
import { Text, View, StatusBar, TouchableOpacity } from 'react-native';
// import Pickers from './Pickers';
import styles from '../styles/styles';

const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = time => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return { minutes: formatNumber(minutes), seconds: formatNumber(seconds) };
};

class Timer extends Component {
  state = {
    remainingSeconds: 5,
    isRunning: false,
    selectedMinutes: '0',
    // selectedSeconds: '5',
  };

  interval = null;

  componentDidUpdate(prevProp, prevState) {
    if (this.state.remainingSeconds === 0 && prevState.remainingSeconds !== 0) {
      this.stop();
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  onPickerChange = itemValue => {
    this.setState({ selectedMinutes: itemValue });
  };

  start = () => {
    this.setState(state => ({
      remainingSeconds: parseInt(state.selectedMinutes, 10) * 60,
      // +parseInt(state.selectedSeconds, 10),
      isRunning: true,
    }));

    this.interval = setInterval(() => {
      this.setState(state => ({
        remainingSeconds: state.remainingSeconds - 1,
      }));
    }, 1000);
  };

  stop = () => {
    clearInterval(this.interval);
    this.interval = null;
    this.setState({
      remainingSeconds: 5, // temporary
      isRunning: false,
    });
  };

  render() {
    const { minutes, seconds } = getRemaining(this.state.remainingSeconds);
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {/* {this.state.isRunning ? (
          <Text style={styles.timerText}>{`${minutes}:${seconds}`}</Text>
        ) : (
          // <Text>hi</Text>
          <Pickers onPickerChange={this.onPickerChange} props={this.state} />
        )} */}
        {this.state.isRunning ? (
          <TouchableOpacity
            onPress={this.stop}
            style={[styles.button, styles.buttonStop]}
          >
            <Text style={[styles.buttonText, styles.buttonTextStop]}>Stop</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={this.start} style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export default Timer;
