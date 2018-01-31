import { PLAYER_FORM_UPDATE } from './actions';

const INITIAL_STATE = {
  lastName: 'МЕЛЬНИКОВ',
  firstName: 'ВЯЧЕСЛАВ',
  fatherName: 'ВЛАДИМИРОВИЧ',
  birthDate: null,
  phone: '+ 7 000 123 45 67',
  address: 'Тольятти, Самарская область',
  avatar: {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Volleyball_dig_02.jpg'
  },
  vkLink: 'www.vk.com/melnik.mellow',
  fbLink: 'www.facebook.com/melnik.mellow',
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
  default:
    return state;
  }
};
