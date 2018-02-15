import { GYM_FORM_UPDATE } from './actions';

const INITIAL_STATE = {
  photos: []
};

export default (state = INITIAL_STATE, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
  case GYM_FORM_UPDATE:
    return {
      ...state,
      ...action.payload
    };
  default:
    return state;
  }
};
