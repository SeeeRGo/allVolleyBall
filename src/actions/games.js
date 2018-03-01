import axios from 'axios';
import moment from 'moment';
import { AsyncStorage } from 'react-native';
import _ from 'lodash';

export const SET_GAME_INFO = 'SET_GAME_INFO';

export const getGameInfo = async (gameId) => {
  try {
    const ACCESS_TOKEN = await AsyncStorage.getItem('tokenId');
    let game;
    game = await axios.get(`http://134513.simplecloud.ru:3010/api/Games/${gameId}`);
    let creator;
    creator = await axios.get(`http://134513.simplecloud.ru:3010/api/Games/${gameId}/creator`);
    let gym;
    gym = await axios.get(`http://134513.simplecloud.ru:3010/api/Gyms/${game.data.gymId}`);
    let joinRequests;
    joinRequests = await axios.get(`http://134513.simplecloud.ru:3010/api/Games/${gameId}/requestsToGame`);
    let playerLevel;
    playerLevel = await axios.get(`http://134513.simplecloud.ru:3010/api/Games/${gameId}/playerLevels`);
    let kindOfSport;
    kindOfSport = await axios.get(`http://134513.simplecloud.ru:3010/api/Games/${gameId}/kindOfSports`);
    let gameType;
    gameType = await axios.get(`http://134513.simplecloud.ru:3010/api/Games/${gameId}/gameType`);
    console.log(game);
    return {
      ...game.data,
      creator: creator.data,
      gym: gym.data,
      joinRequests: joinRequests.data,
      playerLevel: playerLevel.data,
      gameType: gameType.data,
      kindOfSport: kindOfSport.data

    };
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
    return null;
  }
};

export const getGameById = (gameId) => async (dispatch) => {
  try {
    let gameInfo;
    gameInfo = await getGameInfo(gameId);
    dispatch({
      type: SET_GAME_INFO,
      payload: gameInfo
    });
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
  }
};
