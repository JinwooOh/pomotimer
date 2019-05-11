import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { TimerContext } from './TimerContext';
import styles from '../styles/styles';

export default function TargetInfo() {
  const [state, setState] = useContext(TimerContext);
  return (
    <View>
      <Text style={styles.targetInfoText}>
        Today {state.currentTarget} of {state.target} 🍅
      </Text>
    </View>
  );
}
