import React, { useState, useReducer, createContext } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import AppNavigator from './src/components/AppCointainer';
import { TimerContext } from './src/components/TimerContext';

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  const [state, setState] = useState({
    remainingSeconds: 1200,
    isRunning: false,
    selectedMinutes: '20',

    target: '4',
    currentTarget: 0,

    breakMinutes: '10',
    isBreak: false,
  });

  return (
    <TimerContext.Provider value={[state, setState]}>
      <AppContainer />
    </TimerContext.Provider>
  );
};

export default App;
