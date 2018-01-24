import * as actions from '../actions/user';

const initialState = {
  userProfile: null
};

export default (state = initialState, action) => {
  switch (action.type) {
  case actions.SET_USER:
    return {
      ...state,
      userProfile: action.payload
    };
  case actions.RESET_USER:
    return {
      ...state,
      userProfile: null
    };

  default:
    return state;
  }
};

