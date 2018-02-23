import {
  CHANGE_CREDENTIAL,
  RESET_CREDENTIALS
} from './actions';

const initalCredentials = {
  username: '',
  password: ''
};

const initalState = {
  credentials: {
    ...initalCredentials
  }
};

export default (state = initalState, action) => {
  switch (action.type) {
  case CHANGE_CREDENTIAL:
    console.log(action.payload);
    return {
      ...state,
      ...action.payload
    };
  case RESET_CREDENTIALS:
    return {
      ...state,
      ...initalCredentials
    };
  default:
    return state;
  }
};
