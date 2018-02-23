import { GAME_FORM_UPDATE } from './actions';
import { SET_GAME } from '../GameScreen/actions';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GAME_FORM_UPDATE:
    return {
      ...state,
      ...action.payload
    };
  case SET_GAME:
    console.log(action.payload);
    return action.payload;
  default:
    return state;
  }
};
