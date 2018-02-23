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
      details: formData.tarifGrid,
      adminDataConfirmation: formData.adminDataConfirmation
    };

    let response;
    const ACCESS_TOKEN = await AsyncStorage.getItem('allVolleyballToken');
    response = await axios.post('http://10.0.3.2:3010/api/Gyms/', gymData, {
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
