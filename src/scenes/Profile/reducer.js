import { PROFILE_UPDATE, SET_PROFILE } from './actions';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PROFILE_UPDATE:
    return { ...state, ...action.payload };
  case SET_PROFILE:
    return action.payload;
  default:
    return state;
  }
};
