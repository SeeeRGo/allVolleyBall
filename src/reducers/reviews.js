import { UPDATE_REVIEW, SUBMIT_REVIEW } from '../scenes/Game/GameScreen/actions';

const INITIAL_STATE = '';

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
  case UPDATE_REVIEW:
    return action.payload;
  case SUBMIT_REVIEW:
    return INITIAL_STATE;
  default: return state;
  }
};

