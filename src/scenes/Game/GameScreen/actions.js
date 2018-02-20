import axios from 'axios';
import moment from 'moment';
import { AsyncStorage } from 'react-native';
import _ from 'lodash';

export const GAME_UPDATE = 'GAME_UPDATE';
export const GAME_CREATE = 'GAME_CREATE';
export const FETCH_GAMES = 'FETCH_GAMES';
export const GET_GAME_CREATOR_SUCCESS = 'GET_GAME_CREATOR_SUCCESS';

const sportTypes = [
  'ВОЛЕЙБОЛ КЛАССИЧЕСКИЙ',
  'ВОЛЕЙБОЛ ПЛЯЖНЫЙ'
];

const gameTypes = [
  'СВОБОДНАЯ ИГРА',
  'ТРЕНИРОВКА',
  'ИГРА ЧЕМПИОНАТА'

];

export const updateGame = (updates, gameId) => async (dispatch) => {
  try {
    const response = await axios.patch(`http://10.0.3.2:3010/api/Games/${gameId}`, updates);
    console.log(response);
    dispatch({
      type: GAME_UPDATE,
      payload: {
        updates,
        gameId
      }
    });
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
  }
};

export const updateGameImage = (gameId, source) => async (dispatch) => {
  try {
    console.log(gameId, source);
    const data = {
      base64: source,
      name: 'img.png',
      type: 'png',
      gameid: gameId
    };
    let response;
    response = await axios.post('http://10.0.3.2:3010/api/CustomFiles/upload', data);
    // let response1;
    // response1 = await axios.patch(`http://10.0.3.2:3010/api/Games/${gameId}`, { playerComments: [{ avatarLink: response.name }] });
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
  }
};

export const createGame = (formData) => async (dispatch) => {
  try {
    const {
      gameDate, gameTime, minPlayers, maxPlayers, gameType,
      gameEndTime, gameStartTime, price, sportType, creatorId
    } = formData;
    console.log(formData);
    const game = {
      date: moment((`${gameDate} ${gameTime}`), 'DD MMM YYYY HH mm').toISOString(),
      playersCounts: {
        min: minPlayers,
        max: maxPlayers
      },
      arrivalTime: moment((`${gameDate} ${gameStartTime}`), 'DD MMM YYYY HH mm').toISOString(),
      startTime: moment((`${gameDate} ${gameTime}`), 'DD MMM YYYY HH mm').toISOString(),
      duration: {
        hours: moment(gameEndTime, 'HH mm').diff(gameStartTime, 'HH mm'),
        minutes: moment(gameEndTime, 'HH mm').diff(gameStartTime, 'HH mm'),
        seconds: moment(gameEndTime, 'HH mm').diff(gameStartTime, 'HH mm')
      },
      cost: price,
      paymentTerms: {},
      chat: [],
      playerComments: [],
      gymId: 1,
      kindOfSportsId: _.indexOf(sportTypes, sportType) + 1,
      gameTypeId: _.indexOf(gameTypes, gameType) + 1,
      creatorId
    };
    console.log(JSON.stringify(game));
    let response;
    response = await axios.post('http://10.0.3.2:3010/api/Games', game);
    console.log(response);
    dispatch({ type: GAME_CREATE, payload: game });
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
  }
};

export const fetchGames = () => async (dispatch) => {
  try {
    let response;
    response = await axios.get('http://10.0.3.2:3010/api/Games');
    console.log(response);
    let games;
    games = await Promise.all(response.data.map(async (game) => {
      let creator;
      creator = await axios.get(`http://10.0.3.2:3010/api/Games/${game.id}/creator`);
      return {
        ...game,
        creator: {
          ...creator.data
        }
      };
    }));
    dispatch({ type: FETCH_GAMES, payload: games });
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
  }
};

export const fetchGamesFiltered = (filter) => async (dispatch) => {
  try {
    console.log(encodeURIComponent(JSON.stringify(filter)));
    const link = `http://10.0.3.2:3010/api/Games/find-by-filter?filter=${encodeURIComponent(JSON.stringify(filter))}`;
    console.log(link);
    let ACCESS_TOKEN;
    ACCESS_TOKEN = await AsyncStorage.getItem('allVolleyballToken');
    let response;
    response = await axios.get(`http://10.0.3.2:3010/api/Games/find-by-filter?filter=${encodeURIComponent(JSON.stringify(filter))}`);
    console.log(response);
    let games;
    games = await Promise.all(response.data.map(async (game) => {
      let creator;
      creator = await axios.get(`http://10.0.3.2:3010/api/Games/${game.id}/creator`);
      return {
        ...game,
        creator: {
          ...creator.data
        }
      };
    }));
    console.log(games);
    dispatch({ type: FETCH_GAMES, payload: games });
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
  }
};

export const fetchGamesThroughRequests = (userId) => async (dispatch) => {
  try {
    const filter = { profileId: userId };
    const link = `http://10.0.3.2:3010/api/RequestToGames?filter=${encodeURIComponent(JSON.stringify(filter))}`;
    let ACCESS_TOKEN;
    ACCESS_TOKEN = await AsyncStorage.getItem('allVolleyballToken');
    let response;
    response = await axios.get(link);
    //  TODO исключить возможность дублей
    console.log(response);
    let games;
    games = await Promise.all(response.data.map(async (request) => {
      let creatorProfile;
      let game;
      game = await axios.get(`http://10.0.3.2:3010/api/Games/${request.gameId}`);
      let creator;
      creator = await axios.get(`http://10.0.3.2:3010/api/Games/${game.id}/creator`);
      return {
        ...game.data,
        creator: {
          ...creator.data
        }
      };
    }));
    console.log(games);
    dispatch({ type: FETCH_GAMES, payload: games });
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
  }
};

export const sendJoinGameRequest = (userId, gameId) => async (dispatch) => {
  try {
    let response;
    response = axios.post('http://10.0.3.2:3010/api/RequestToGames/', {
      status: 'request',
      gameId,
      profileId: userId
    });
    console.log(response);
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
  }
}