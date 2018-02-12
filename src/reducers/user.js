import * as actions from '../actions/user';

const initialState = {
  userProfile: null,
  userId: null
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
  case actions.SET_USER_ID:
    return {
      ...state,
      userId: action.payload
    };
  default:
    return state;
  }
};

