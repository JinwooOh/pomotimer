import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import TimerScreen from './TimerScreen';
import Setting from './Setting';
import styles from '../styles/styles';

const TabNavigator = createBottomTabNavigator(
  {
    Timer: TimerScreen,
    Setting,
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: styles.button.borderColor,
        paddingBottom: 10,
      },
      activeTintColor: styles.container.backgroundColor,
      inactiveTintColor: 'white',
      labelStyle: { fontSize: 20 },
    },
  }
);

export default createAppContainer(TabNavigator);
