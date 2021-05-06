import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'managex',
      storage: AsyncStorage,
      whitelist: ['auth', 'task'],
    },
    reducers,
  );
  return persistedReducer;
};
