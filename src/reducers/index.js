import { combineReducers } from 'redux';
import login from '../scenes/Login/reducer';
import user from './user';
import loadings from './loadings';
import files from './files';
import fileInfo from './fileInfo';
import gameInfo from './gameInfo';
import review from './reviews';
import requestList from './requests';
import requestInfo from './requestInfo';
import profileForm from '../scenes/ProfileForm/reducer';
import profile from '../scenes/Profile/reducer';
import game from '../scenes/Game/GameScreen/reducer';
import gameForm from '../scenes/Game/GameForm/reducer';
import gymForm from '../scenes/Gym/GymForm/reducer';
import signupForm from '../scenes/Signup/reducer';
import selections from '../scenes/Feed/reducer';
import searchFilter from '../scenes/Search/reducer';

export default combineReducers({
  login,
  user,
  files,
  fileInfo,
  review,
  requestList,
  requestInfo,
  loadings,
  profileForm,
  profile,
  game,
  gameForm,
  gameInfo,
  signupForm,
  gymForm,
  selections,
  searchFilter
});
