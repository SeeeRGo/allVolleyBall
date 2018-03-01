import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

export const PROFILE_UPDATE = 'PROFILE_UPDATE';
export const SET_PROFILE = 'SET_PROFILE';

export const updateProfile = (updates, userId) => async (dispatch) => {
  try {
    const ACCESS_TOKEN = await AsyncStorage.getItem('tokenId');
    console.log(updates);
    console.log(userId);
    let response = await axios.patch(`http://134513.simplecloud.ru:3010/api/Profiles/${userId}?access_token=${ACCESS_TOKEN}`, { ...updates });
    if (updates.photo) {
      response = await axios.post('http://134513.simplecloud.ru:3010/api/CustomFiles/upload', { base64: updates.photo, profileId: userId });
      console.log(response);
    }
    dispatch({
      type: PROFILE_UPDATE,
      payload: updates
    });
    Actions.push('Profile');
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
  }
};

export const getProfile = (userId) => async (dispatch) => {
  try {
    const ACCESS_TOKEN = await AsyncStorage.getItem('tokenId');
    const response = await axios.get(`http://134513.simplecloud.ru:3010/api/Profiles/${userId}?access_token=${ACCESS_TOKEN}`);
    dispatch({ type: SET_PROFILE, payload: response.data });
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
  }
};
