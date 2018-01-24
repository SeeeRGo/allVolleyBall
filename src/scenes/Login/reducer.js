import {
  CHANGE_CREDENTIAL
} from './actions';

const initalState = {
  credentials: {
    phone: '',
    password: ''
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
  default:
    return state;
  }
};
