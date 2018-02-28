import { CHANGE_FIELD, RESET, ADD_SOCIAL_NETWORK } from './actions';


const initalState = {
  user: {},
  socialNetworks: []
};

export default (state = initalState, action) => {
  switch (action.type) {
  case CHANGE_FIELD:
    return {
      ...state,
      user: {
        ...state.user,
        [action.payload.fieldName]: action.payload.fieldValue
      }
    };
  case ADD_SOCIAL_NETWORK:
    return {
      ...state,
      socialNetworks: [
        ...state.socialNetworks,
        action.payload
      ]
    };
  case RESET:
    return {
      ...initalState
    };
  default:
    return state;
  }
};
