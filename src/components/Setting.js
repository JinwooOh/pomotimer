import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import SettingInput from './SettingInput';
import styles from '../styles/styles';

export default class Setting extends Component {
  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: styles.container.backgroundColor }}
      >
        <View style={styles.container}>
          <Text style={styles.settingHeader}>Settings</Text>
          <SettingInput />
        </View>
      </SafeAreaView>
    );
  }
}
