import React, { useContext, useState, useEffect, useRef } from 'react';
import { Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { TimerContext } from './TimerContext';
import styles from '../styles/styles';
import TargetInfo from './TargetInfo';
import Timer from './Timer';

// TODO: handle when reach target pomodoros
const TimerScreen = () => {
  const [state, setState] = useContext(TimerContext);

  useInterval(
    () => {
      // Your custom logic here
      setState(prevState => ({
        ...prevState,
        remainingSeconds: prevState.remainingSeconds - 1,
      }));
    },
    state.isRunning ? 1000 : null
  );

  useEffect(() => {
    if (state.remainingSeconds === 0) {
      setState(prevState => ({
        ...prevState,
        remainingSeconds: prevState.isBreak
          ? parseInt(state.selectedMinutes, 10) * 60
          : parseInt(state.breakMinutes, 10) * 60,
        isRunning: false,
        currentTarget: prevState.isBreak
          ? prevState.currentTarget
          : prevState.currentTarget + 1,
        isBreak: !prevState.isBreak,
      }));
    }
  }, [
    setState,
    state.breakMinutes,
    state.remainingSeconds,
    state.selectedMinutes,
  ]);

  const handleIsRunningChange = () => {
    setState(prevState => ({
      ...prevState,
      isRunning: !prevState.isRunning,
    }));
  };

  const handleReset = () => {
    setState(prevState => ({
      ...prevState,
      isRunning: false,
      remainingSeconds: prevState.isBreak
        ? parseInt(state.breakMinutes, 10) * 60
        : parseInt(state.selectedMinutes, 10) * 60,
    }));
  };
  console.log(state.isBreak);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Timer state={state} handleIsRunningChange={handleIsRunningChange} />
      <View style={styles.bottom}>
        {state.isRunning ? (
          <TouchableOpacity onPress={handleReset} style={[styles.reset]}>
            <Text style={styles.resetText}>Abort</Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}
        <View style={styles.bottom}>
          {state.isBreak ? (
            <Text style={styles.targetInfoText}>Break ☕</Text>
          ) : (
            <Text style={styles.targetInfoText}>Work</Text>
          )}
        </View>
        <TargetInfo />
      </View>
    </View>
  );
};

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default TimerScreen;

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
