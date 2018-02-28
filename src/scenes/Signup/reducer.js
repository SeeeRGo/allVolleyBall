import get from 'lodash/get';
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
  // eslint-disable-next-line no-case-declarations
  case ADD_SOCIAL_NETWORK:
    const splittedName = action.payload.displayName.split(' ');
    const photoLink = get(action.payload, 'photos.0.value');
    const photo = photoLink ? { link: photoLink } : {};
    return {
      ...state,
      user: {
        ...state.user,
        photo,
        firstName: splittedName[0],
        lastName: splittedName[1]
      },
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
