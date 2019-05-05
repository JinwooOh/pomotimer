import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import TimerScreen from './TimerScreen';
import Setting from './Setting';
import styles from '../styles/styles';

const TabNavigator = createBottomTabNavigator(
  {
    TimerScreen,
    Setting,
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: styles.container.backgroundColor,
      },
    },
  }
);

export default createAppContainer(TabNavigator);
