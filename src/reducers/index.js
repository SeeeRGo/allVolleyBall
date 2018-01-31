import { combineReducers } from 'redux';
import login from '../scenes/Login/reducer';
import user from './user';
import loadings from './loadings';
import profileForm from '../scenes/ProfileForm/reducer';
import profile from '../scenes/Profile/reducer';

export default combineReducers({
  login,
  user,
  loadings,
  profileForm,
  profile
});
