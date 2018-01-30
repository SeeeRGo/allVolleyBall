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
    return {
      ...state,
      credentials: {
        ...state.credentials,
        [action.payload.name]: action.payload.value
      }
    };
  case RESET_CREDENTIALS:
    return {
      ...state,
      credentials: {
        ...initalCredentials
      }
    };
  default:
    return state;
  }
};
