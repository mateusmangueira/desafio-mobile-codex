import {combineReducers} from 'redux';
import auth from './auth/reducer';
import task from './task/reducer';

export default combineReducers({
  auth,
  task,
});
