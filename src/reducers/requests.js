import { SET_REQUESTS } from '../scenes/Game/GameScreen/actions';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_REQUESTS:
    return action.payload;
  default:
    return state;
  }
}