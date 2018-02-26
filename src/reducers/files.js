import { SET_GALLERY } from '../scenes/Game/GameScreen/actions';
import { SET_FILES } from '../actions/files';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
  case SET_GALLERY:
    return action.payload;
  case SET_FILES:
    return action.payload;
  default: return state;
  }
};

