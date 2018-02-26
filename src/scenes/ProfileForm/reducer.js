import { PLAYER_FORM_UPDATE } from './actions';
import { SET_PROFILE } from '../Profile/actions';

const INITIAL_STATE = {
  lastName: 'МЕЛЬНИКОВ',
  firstName: 'ВЯЧЕСЛАВ',
  fatherName: 'ВЛАДИМИРОВИЧ',
  birthDate: null,
  phone: '+ 7 000 123 45 67',
  address: 'Тольятти, Самарская область',
  vkLink: 'www.vk.com/melnik.mellow',
  fbLink: 'www.facebook.com/melnik.mellow',
  city: 'Тольятти',
  password: '',
  passwordRe: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PLAYER_FORM_UPDATE:
    console.log(action.payload);
    return {
      ...state,
      ...action.payload
    };
  case SET_PROFILE:
    console.log(action.payload);
    return action.payload;
  default:
    return state;
  }
};
