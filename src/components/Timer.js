import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import getRemaining from '../util/getRemaining';

export default function Timer(props) {
  console.log(props);
  return (
    <View style={styles.timer}>
      <Text style={styles.timerText}>
        {getRemaining(props.state.remainingSeconds).minutes}:
        {getRemaining(props.state.remainingSeconds).seconds}
      </Text>

      {props.state.isRunning ? (
        <TouchableOpacity
          onPress={props.handleIsRunningChange}
          style={[styles.button, styles.buttonStop]}
        >
          <Text style={[styles.buttonText, styles.buttonTextStop]}>Stop</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={props.handleIsRunningChange}
          style={[styles.button]}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
