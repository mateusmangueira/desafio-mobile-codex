import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Tasks from './pages/Tasks';
import Create from './pages/Tasks/Create';
import Edit from './pages/Tasks/Edit';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          Login,
          SignUp,
        }),
        App: createStackNavigator({
          Tasks: {
            screen: Tasks,
            navigationOptions: {
              headerTitle: false,
              headerTransparent: true,
            },
          },
          Create: {
            screen: Create,
            navigationOptions: {
              headerTitle: false,
              headerTransparent: true,
            },
          },
          Edit: {
            screen: Edit,
            navigationOptions: {
              headerTitle: false,
              headerTransparent: true,
            },
          },
        }),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      },
    ),
  );
