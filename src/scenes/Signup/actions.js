export const CHANGE_CREDENTIAL = 'scenes/Signup/CHANGE_CREDENTIAL';
export const RESET_CREDENTIALS = 'scenes/Signup/RESET_CREDENTIALS';

/**
 * @function
 * @param {String} credentialName - название поля
 * @param {String} credentialValue - значение поля
 * @return {Action}
*/
export const changeCredential = (credentialName, credentialValue) => ({
  type: CHANGE_CREDENTIAL,
  payload: {
    name: credentialName,
    value: credentialValue
  }
});

/**
 * @function
 * @return {Action}
*/
export const resetCredentials = () => ({
  type: RESET_CREDENTIALS
});
