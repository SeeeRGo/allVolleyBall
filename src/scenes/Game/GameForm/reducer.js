import { GAME_FORM_UPDATE } from './actions';

const INITIAL_STATE = {
  price: 0,
  gameTime: null,
  startTime: null,
  finishTime: null,
  gameAddress: '',
  gameInfo: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.payload);
  console.log(state);
  switch (action.type) {
  case GAME_FORM_UPDATE:
    return {
      ...state,
      ...action.payload
    };
  default:
    return state;
  }
};
