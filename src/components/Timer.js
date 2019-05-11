import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import getRemaining from '../util/getRemaining';

export default function Timer(props) {
  const { state, handleIsRunningChange } = props;
  return (
    <View style={styles.timer}>
      <Text style={styles.timerText}>
        {getRemaining(state.remainingSeconds).minutes}:
        {getRemaining(state.remainingSeconds).seconds}
      </Text>

      {state.isRunning ? (
        <TouchableOpacity
          onPress={handleIsRunningChange}
          style={[styles.button, styles.buttonStop]}
        >
          <Text style={[styles.buttonText, styles.buttonTextStop]}>Stop</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={handleIsRunningChange}
          style={[styles.button]}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
