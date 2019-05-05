import React, { useContext } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { TimerContext } from './TimerContext';
import styles from '../styles/styles';
import getSettingOptions from '../util/getSettingOptions';

function SettingInput() {
  const [state, setState] = useContext(TimerContext);
  // maxTime,maxBreak, maxPomo, Timeinterval, breakInterval;
  const options = getSettingOptions(90, 30, 10, 10, 5);

  return (
    <View style={styles.setting}>
      <View style={styles.settingOption}>
        <Text style={styles.settingText}>Time Interval</Text>
        <RNPickerSelect
          placeholder={{}}
          items={options.times}
          onValueChange={value => {
            setState(prevState => ({
              ...prevState,
              selectedMinutes: value,
              remainingSeconds: parseInt(value, 10) * 60,
            }));
          }}
          style={pickerSelectStyles}
          value={state.selectedMinutes}
        />
      </View>

      <View style={styles.settingOption}>
        <Text style={styles.settingText}>Break</Text>
        <RNPickerSelect
          placeholder={{}}
          items={options.breaks}
          onValueChange={value => {
            setState(prevState => ({
              ...prevState,
              breakMinutes: value,
            }));
          }}
          style={pickerSelectStyles}
          value={state.breakMinutes}
        />
      </View>

      <View style={styles.settingOption}>
        <Text style={styles.settingText}>Target Pomodoros</Text>
        <RNPickerSelect
          placeholder={{}}
          items={options.pomos}
          onValueChange={value => {
            setState(prevState => ({
              ...prevState,
              target: value,
            }));
          }}
          style={pickerSelectStyles}
          value={state.target}
        />
      </View>
    </View>
  );
}
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#f0f',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
export default SettingInput;
