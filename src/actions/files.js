import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { GAME_FORM_UPDATE } from '../scenes/Game/GameForm/actions';
import { Actions } from 'react-native-router-flux';

export const SET_FILES = 'SET_FILES';
export const SET_FILE_INFO = 'SET_FILE_INFO';

export const uploadFile = (source, destination, id, isAvatar = false) => async (dispatch) => {
  try {
    let ACCESS_TOKEN;
    ACCESS_TOKEN = await AsyncStorage.getItem('tokenId');
    const data = {
      base64: source,
      name: 'img.png',
      type: 'png'
    };
    console.log(data);
    const query = encodeURIComponent(JSON.stringify({
      [`${destination}Id`]: id
    }));
    let patchResponse;
    let response;
    response = await axios.post('http://134513.simplecloud.ru:3010/api/CustomFiles/upload', data);
    console.log(response);
    const patchData = {
      [`${destination}Id`]: id
    };
    patchResponse = await axios.patch(`http://134513.simplecloud.ru:3010/api/CustomFiles/${response.data.id}`, patchData);
    console.log(patchResponse);
    if (isAvatar) {
      let avatar;
      avatar = await axios.get(`http://134513.simplecloud.ru:3010/api/${destination}s/${id}`, {
        headers: {
          Authorization: ACCESS_TOKEN
        }
      });
      console.log(avatar);
      if (destination === 'profile') {
        let profileAvatar;
        profileAvatar = await axios.get(`http://134513.simplecloud.ru:3010/api/Profiles/${id}/customFiles`, {
          headers: {
            Authorization: ACCESS_TOKEN
          }
        });
        await axios.delete(`http://134513.simplecloud.ru:3010/api/CustomFiles/${profileAvatar.data[0].id}`, {
          headers: {
            Authorization: ACCESS_TOKEN
          }
        });
        dispatch({ type: SET_FILES, payload: [profileAvatar.data[1]] });
      } else {
        if (avatar.data.avatarId) {
          await axios.delete(`http://134513.simplecloud.ru:3010/api/CustomFiles/${avatar.data.avatarId}`, {
            headers: {
              Authorization: ACCESS_TOKEN
            }
          });
        }
        await axios.patch(`http://134513.simplecloud.ru:3010/api/${destination}s/${id}`, { avatarId: response.data.id }, {
          headers: {
            Authorization: ACCESS_TOKEN
          }
        });
        dispatch({
          type: `${destination.toUpperCase()}_FORM_UPDATE`,
          payload: {
            avatarId: response.data.id
          }
        });
        let files;
        files = await axios.get(`http://134513.simplecloud.ru:3010/api/${destination}s/${id}/customFiles`);
        dispatch({ type: SET_FILES, payload: files.data });
      }
    }
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
  }
};

export const getFilesByOwner = (ownerType, ownerId) => async (dispatch) => {
  try {
    let ACCESS_TOKEN;
    ACCESS_TOKEN = await AsyncStorage.getItem('tokenId');
    console.log(ownerType, ownerId);
    let files;
    files = await axios.get(`http://134513.simplecloud.ru:3010/api/${ownerType}s/${ownerId}/customFiles`, {
      headers: {
        Authorization: ACCESS_TOKEN
      }
    });
    console.log(files);
    dispatch({ type: SET_FILES, payload: files.data });
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
  }
};

export const getFileById = (fileId) => async (dispatch) => {
  try {
    let file;
    file = await axios.get(`http://134513.simplecloud.ru:3010/api/CustomFiles/${fileId}`);
    console.log(file);
    dispatch({ type: SET_FILE_INFO, payload: file.data });
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
  }
};
