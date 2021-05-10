import {createAppContainer, createSwitchNavigator} from 'react-navigation';

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
        App: createSwitchNavigator({
          Tasks,
          Create,
          Edit,
        }),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      },
    ),
  );
