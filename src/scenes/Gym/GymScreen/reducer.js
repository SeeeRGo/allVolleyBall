
import { UPDATE_GYM, CREATE_GYM, CREATE_GYM_SUCCESS } from './actions';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CREATE_GYM_SUCCESS:
    return state;
  default:
    return state;
  }
};
