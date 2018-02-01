import { GAME_FORM_UPDATE } from './actions';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GAME_FORM_UPDATE:
    return {
      ...state,
      ...action.update
    };
  default:
    return state;
  }
};
