import React, { useContext, useEffect, useRef } from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Vibration,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useInterval } from '../util/useInterval';
import { TimerContext } from './TimerContext';
import styles from '../styles/styles';
import TargetInfo from './TargetInfo';
import Timer from './Timer';
import { getStoragePomo, savePomo } from '../util/localStorage';

// TODO: handle when reach target pomodoros
const TimerScreen = () => {
  const [state, setState] = useContext(TimerContext);
  // AsyncStorage.removeItem('pomos');

  useInterval(
    () => {
      // Your custom logic here
      setState(prevState => ({
        ...prevState,
        remainingSeconds: prevState.remainingSeconds - 1,
      }));
    },
    state.isRunning ? 100 : null
  );

  // get finished pomodoro from asyncstorage
  // and update state.currentTarget
  useEffect(() => {
    AsyncStorage.getItem('pomos', (errs, result) => {
      if (!errs) {
        if (result !== null) {
          setState(prevState => ({
            ...prevState,
            currentTarget: result,
          }));
        }
      }
    });
  });

  // timer hook
  useEffect(() => {
    if (state.remainingSeconds === 0) {
      // save finished storage
      if (!state.isBreak) {
        savePomo(parseInt(state.currentTarget));
        // AsyncStorage.getItem('pomos').then(r => {
        //   console.log(r);
        // });
      }
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
    state.currentTarget,
    state.isBreak,
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
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
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
        <TouchableOpacity onPress={getStoragePomo}>
          <Text>Show Pomos</Text>
        </TouchableOpacity>
        <TargetInfo />
      </View>
    </View>
  );
};

export default TimerScreen;

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
