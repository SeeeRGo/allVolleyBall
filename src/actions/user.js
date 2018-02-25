import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

export const SET_USER = 'actions/loading/SET_USER';
export const RESET_USER = 'actions/loading/RESET_USER';
export const SET_USER_ID = 'SET_USER_ID';

export const LOGIN = 'scenes/Login/LOGIN';
export const LOGIN_SUCCESS = 'scenes/Login/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'scenes/Login/LOGIN_ERROR';

export const LOGIN_BY_SOCIAL_NETWORK = 'scenes/Login/LOGIN_BY_SOCIAL_NETWORK';
export const LOGIN_BY_SOCIAL_NETWORK_SUCCESS = 'scenes/Login/LOGIN_BY_SOCIAL_NETWORK_SUCCESS';
export const LOGIN_BY_SOCIAL_NETWORK_ERROR = 'scenes/Login/LOGIN_BY_SOCIAL_NETWORK_ERROR';

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

export const setUserId = (userId) => ({
  type: SET_USER_ID,
  payload: userId
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
 * @param {Object} tokenObject
 * @return {Action}
*/
export const loginBySocialNetwork = (tokenObject) => ({
  type: LOGIN_BY_SOCIAL_NETWORK,
  payload: tokenObject
});

/**
 * @function
 * @return {Action}
*/
export const loginBySocialNetworkSuccess = () => ({
  type: LOGIN_BY_SOCIAL_NETWORK_SUCCESS
});

/**
 * @function
 * @param {Message} message - текст ошибки
 * @return {Action}
*/
export const loginBySocialNetworkError = (message) => ({
  type: LOGIN_BY_SOCIAL_NETWORK_ERROR,
  message
});

/**
 * @function
 * @param {Object} profile - аккаунт пользователя
 * @return {Action}
*/
export const getMyProfile = () => ({
  type: GET_MY_PROFILE
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
