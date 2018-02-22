import { SET_REQUEST_INFO } from '../scenes/Game/GameScreen/actions';

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_REQUEST_INFO:
    return action.payload;
  default:
    return state;
  }
}
