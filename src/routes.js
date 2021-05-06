import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Tasks from './pages/Tasks';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          Login,
          SignUp,
        }),
        App: createSwitchNavigator({
          Tasks,
        }),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      },
    ),
  );
