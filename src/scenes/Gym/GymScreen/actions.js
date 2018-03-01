import axios from 'axios';
import { AsyncStorage } from 'react-native';

export const CREATE_GYM = 'CREATE_GYM';
export const CREATE_GYM_SUCCESS = 'CREATE_GYM_SUCCESS';

export const createGym = (formData) => async (dispatch) => {
  try {
    console.log(formData);
    const gymData = {
      city: formData.city,
      region: formData.district,
      mero: formData.subwayStation,
      street: formData.street,
      houseNumber: formData.house,
      details: formData.details,
      adminDataConfirmation: formData.adminDataConfirmation
    };

    let response;
    const ACCESS_TOKEN = await AsyncStorage.getItem('tokenId');
    response = await axios.post('http://134513.simplecloud.ru:3010/api/Gyms/', gymData, {
      headers: {
        Authorization: ACCESS_TOKEN
      }
    });
    console.log(response);
    dispatch({ type: CREATE_GYM_SUCCESS });
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
  }
};

export const findGym = (filter) => async () => {
  try {
    const query = encodeURIComponent(JSON.stringify(filter));
    let response;
    response = await axios.get('http://134513.simplecloud.ru:3010/api/Gyms/');
    console.log(response);
    response.data = _.filter(response.data, filter);
    return response.data;
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
    return null;
  }
};
