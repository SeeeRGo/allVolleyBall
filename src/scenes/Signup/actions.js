import axios from 'axios';
import moment from 'moment';

export const CHANGE_CREDENTIAL = 'scenes/Signup/CHANGE_CREDENTIAL';
export const RESET_CREDENTIALS = 'scenes/Signup/RESET_CREDENTIALS';
export const SUBMIT_SIGNUP_FORM = 'SUBMIT_SIGNUP_FORM';

/**
 * @function
 * @param {String} credentialName - название поля
 * @param {String} credentialValue - значение поля
 * @return {Action}
*/
export const changeCredential = (credentialName, credentialValue) => ({
  type: CHANGE_CREDENTIAL,
  payload: {
    [credentialName]: credentialValue
  }
});

/**
 * @function
 * @return {Action}
*/
export const resetCredentials = () => ({
  type: RESET_CREDENTIALS
});

export const submitSignupForm = (formData) => async (dispatch) => {
  try {
    console.log(formData);
    const data = {
      ...formData,
      email: '',
      emailVerified: false,
      username: formData.phone,
      birthdate: moment(),
      gender: null,
      prefferedDistricts: [],
      photo: {},
      socialNetworkProfiles: [],
      selfInfo: '',
      timesCanceled: 0,
      realm: ''
    };
    console.log(JSON.stringify(data));
    const response = await axios.post('http://134513.simplecloud.ru:3010/api/Profiles', data);
    console.log(response);
    dispatch({ type: SUBMIT_SIGNUP_FORM, payload: data });
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
  }
};
