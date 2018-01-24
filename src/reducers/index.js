import { combineReducers } from 'redux';
import login from '../scenes/Login/reducer';
import user from './user';
import loadings from './loadings';

export default combineReducers({
  login,
  user,
  loadings
});
