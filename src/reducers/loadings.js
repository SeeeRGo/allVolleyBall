import * as actions from '../actions/loadings';

export default (state = {}, action) => {
  switch (action.type) {
  case actions.START_LOADING:
    return {
      ...state,
      [action.payload]: true
    };
  case actions.STOP_LOADING:
    return {
      ...state,
      [action.payload]: false
    };

  default:
    return state;
  }
};

