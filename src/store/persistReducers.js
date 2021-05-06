import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'taskscheduler',
      storage: AsyncStorage,
      whitelist: ['auth', 'task'],
    },
    reducers,
  );
  return persistedReducer;
};
