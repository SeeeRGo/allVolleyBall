import { SET_GAME_INFO } from '../actions/games';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_GAME_INFO:
    return action.payload;
  default:
    return state;
  }
};
