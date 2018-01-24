export const CHANGE_CREDENTIAL = 'scenes/Login/CHANGE_CREDENTIAL';

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
