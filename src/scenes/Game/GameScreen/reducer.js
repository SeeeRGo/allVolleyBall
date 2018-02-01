import { GAME_UPDATE, GAME_CREATE } from './actions';

const INITIAL_STATE = {
  gameType: '',
  minPlayers: '',
  maxPlayers: '',
  price: 0,
  gameTime: null,
  startTime: null,
  finishTime: null,
  gameAddress: '',
  gameInfo: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GAME_UPDATE:
    return { ...state, ...action.payload };
  default:
    return state;
  }
};
