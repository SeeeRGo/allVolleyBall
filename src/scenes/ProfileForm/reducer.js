import { PLAYER_FORM_UPDATE } from './actions';
import { SET_PROFILE } from '../Profile/actions';
import { SET_USER } from '../../actions/user';

const INITIAL_STATE = {
  lastName: '',
  firstName: '',
  fatherName: '',
  birthDate: null,
  phone: '',
  address: '',
  photo: {
    uri: 'http://archive.2030palette.org/addons/shared_addons/themes/palette_2030/img/swatch_editor/image_placeholder.jpg'
  },
  city: 'Тольятти',
  password: '',
  passwordRe: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PLAYER_FORM_UPDATE:
    return {
      ...state,
      ...action.payload
    };
  case SET_PROFILE:
    return action.payload;
  case SET_USER:
    return action.payload;
  default:
    return state;
  }
};
