export const SET_USER = 'actions/loading/SET_USER';
export const RESET_USER = 'actions/loading/RESET_USER';

export const LOGIN = 'scenes/Login/LOGIN';
export const LOGIN_SUCCESS = 'scenes/Login/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'scenes/Login/LOGIN_ERROR';

export const LOGOUT = 'scenes/Login/LOGOUT';
export const LOGOUT_SUCCESS = 'scenes/Login/LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'scenes/Login/LOGOUT_ERROR';

export const GET_MY_PROFILE = 'scenes/Login/GET_MY_PROFILE';
export const GET_MY_PROFILE_SUCCESS = 'scenes/Login/GET_MY_PROFILE_SUCCESS';
export const GET_MY_PROFILE_ERROR = 'scenes/Login/GET_MY_PROFILE_ERROR';

/**
 * @function
 * @param {Object} user - профиль пользователя
 * @returns {Action}
 */
export const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

/**
 * @function
 * @returns {Action}
 */
export const resetUser = () => ({
  type: RESET_USER
});

/**
 * @function
 * @param {Object} credentials - объект для авторизации
 * @return {Action}
*/
export const login = (credentials) => ({
  type: LOGIN,
  payload: credentials
});

/**
 * @function
 * @return {Action}
*/
export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

/**
 * @function
 * @param {Message} message - текст ошибки
 * @return {Action}
*/
export const loginError = (message) => ({
  type: LOGIN_ERROR,
  message
});

/**
 * @function
 * @param {Object} profile - аккаунт пользователя
 * @return {Action}
*/
export const getMyProfile = (profile) => ({
  type: GET_MY_PROFILE,
  payload: profile
});

/**
 * @function
 * @return {Action}
*/
export const getMyProfileSuccess = () => ({
  type: GET_MY_PROFILE_SUCCESS
});

/**
 * @function
 * @param {Message} message - текст ошибки
 * @return {Action}
*/
export const getMyProfileError = (message) => ({
  type: GET_MY_PROFILE_ERROR,
  message
});

/**
 * @function
 * @param {Object} profile - аккаунт пользователя
 * @return {Action}
*/
export const logout = () => ({
  type: LOGOUT
});

/**
 * @function
 * @return {Action}
*/
export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});

/**
 * @function
 * @param {Message} message - текст ошибки
 * @return {Action}
*/
export const logoutError = (message) => ({
  type: LOGOUT_ERROR,
  message
});
