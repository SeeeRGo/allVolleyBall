import { SET_GALLERY } from '../scenes/Game/GameScreen/actions';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
  case SET_GALLERY:
    return action.payload;
  default: return state;
  }
};

