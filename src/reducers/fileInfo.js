import { SET_FILE_INFO } from '../actions/files';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_FILE_INFO:
    return action.payload;
  default:
    return state;
  }
};
