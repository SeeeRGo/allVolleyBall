export const CHANGE_FIELD = 'scenes/Signup/CHANGE_FIELD';
export const ADD_SOCIAL_NETWORK = 'scenes/Signup/ADD_SOCIAL_NETWORK';
export const RESET = 'scenes/Signup/RESET';

export const addSocialNetwork = (socialNetwork) => ({
  type: ADD_SOCIAL_NETWORK,
  payload: socialNetwork
});

/**
 * @function
 * @param {String} fieldName - название поля
 * @param {String} fieldValue - значение поля
 * @return {Action}
*/
export const changeField = (fieldName, fieldValue) => ({
  type: CHANGE_FIELD,
  payload: {
    fieldName,
    fieldValue
  }
});

/**
 * @function
 * @return {Action}
*/
export const reset = () => ({
  type: RESET
});

