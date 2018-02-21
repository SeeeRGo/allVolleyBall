import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

export const PROFILE_UPDATE = 'PROFILE_UPDATE';
export const SET_PROFILE = 'SET_PROFILE';

export const updateProfile = (updates, userId) => async (dispatch) => {
  try {
    let ACCESS_TOKEN = await AsyncStorage.getItem('allVolleyballToken');
    let response = await axios.patch(`http://10.0.3.2:3010/api/Profiles/${userId}?access_token=${ACCESS_TOKEN}`, {...updates});
    if (updates.photo) {
      response = await axios.post('http://10.0.3.2:3010/api/CustomFiles/upload', {base64: updates.photo, profileId: userId})
      console.log(response);
    }
    dispatch({ 
      type: PROFILE_UPDATE,
      payload: updates
    })
    Actions.replace('Profile');
  } catch (e) {
    console.log(e);
  }  
};

export const getProfile = (userId) => async (dispatch) => {
  try {
    let ACCESS_TOKEN = await AsyncStorage.getItem('allVolleyballToken');
    let response = await axios.get(`http://10.0.3.2:3010/api/Profiles/${userId}?access_token=${ACCESS_TOKEN}`);
    dispatch({ type: SET_PROFILE, payload: response.data });
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
  }
}
