import axios from 'axios';
import moment from 'moment';
import { AsyncStorage } from 'react-native';
import _ from 'lodash';
import { getGameInfo } from '../../../actions/games';

export const GAME_UPDATE = 'GAME_UPDATE';
export const GAME_CREATE = 'GAME_CREATE';
export const FETCH_GAMES = 'FETCH_GAMES';
export const GET_GAME_CREATOR_SUCCESS = 'GET_GAME_CREATOR_SUCCESS';
export const SET_GAME = 'SET_GAME';
export const SET_GAME_INFO = 'SET_GAME_INFO';
export const SET_GALLERY = 'SET_GALLERY';
export const SUBMIT_REVIEW = 'SUBMIT_REVIEW';
export const UPDATE_REVIEW = 'SUBMIT_UPDATE';
export const SET_REQUESTS = 'SET_REQUESTS';
export const SET_REQUEST_INFO = 'SET_REQUEST_INFO';
export const APPROVE_REQUEST = 'APPROVE_REQUEST';

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
      gameId: 1
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
      gameDate, gameTime, minPlayers, maxPlayers, gameType, rating,
      gameEndTime, gameStartTime, price, sportType, creatorId
    } = formData;
    console.log(moment(gameEndTime, 'HH mm').diff(moment(gameTime, 'HH mm')));
    const game = {
      date: moment((`${gameDate} ${gameTime}`), 'DD MMM YYYY HH mm').toISOString(),
      playersCounts: {
        min: minPlayers,
        max: maxPlayers
      },
      arrivalTime: moment((`${gameDate} ${gameStartTime}`), 'DD MMM YYYY HH mm').toISOString(),
      startTime: moment((`${gameDate} ${gameTime}`), 'DD MMM YYYY HH mm').toISOString(),
      duration: {
        hours: moment(gameEndTime, 'HH mm').diff(moment(gameTime, 'HH mm'), 'hours'),
        minutes: (moment(gameEndTime, 'HH mm').diff(moment(gameTime, 'HH mm')) % 3600000) / 60000,
        seconds: (moment(gameEndTime, 'HH mm').diff(moment(gameTime, 'HH mm')) % 60000) / 1000
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
    let levels;
    let ACCESS_TOKEN;
    ACCESS_TOKEN = await AsyncStorage.getItem('allVolleyballToken');
    response = await axios.post('http://10.0.3.2:3010/api/Games', game, {
      headers: {
        Authorization: ACCESS_TOKEN
      }
    });
    console.log(response);
    levels = await axios.put(`http://10.0.3.2:3010/api/Games/${response.data.id}/playerLevels/rel/${rating}`, null, {
      headers: {
        Authorization: ACCESS_TOKEN
      }
    });
    console.log(levels);
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
    console.log(ACCESS_TOKEN);
    let response;
    // Пока поиск нормально не заработает
    if (filter && false) {
      response = await axios.get(link);
    } else {
      response = await axios.get('http://10.0.3.2:3010/api/Games');
      response = _.filter(response.data, filter);
    }
    console.log(response);
    let games;
    games = await Promise.all(response.map(async (game) => {
      let result;
      result = await getGameInfo(game.id);
      return result;
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
};

export const getGameFiles = (gameId) => async (dispatch) => {
  try {
    let files;
    files = await axios.get(`http://10.0.3.2:3010/api/Games/${gameId}/customFiles`);
    dispatch({ type: 'SET_GALLERY', payload: files.data });
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
  }
};

export const updateReview = (value) => ({
  type: UPDATE_REVIEW,
  payload: value
});

export const submitReview = (review, gameId, profileId) => async (dispatch) => {
  try {
    const data = {
      text: review,
      creatorId: profileId,
      profileId,
      gameId
    };
    let ACCESS_TOKEN;
    ACCESS_TOKEN = await AsyncStorage.getItem('allVolleyballToken');
    let response;
    response = await axios.post(`http://10.0.3.2:3010/api/Games/${gameId}/reviews`, data, {
      headers: {
        Authorization: ACCESS_TOKEN
      }
    });
    console.log(response);
    dispatch({ type: SUBMIT_REVIEW });
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
  }
};

export const getInfoFromRequest = (requestId) => async (dispatch) => {
  try {
    let game;
    game = await axios.get(`http://10.0.3.2:3010/api/RequestToGames/${requestId}/game`);
    let profile;
    profile = await axios.get(`http://10.0.3.2:3010/api/RequestToGames/${requestId}/profile`);
    dispatch({ type: SET_REQUEST_INFO, payload: { game: game.data, profile: profile.data } });
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
  }
};

export const getRequestsToMyGames = (userId) => async (dispatch) => {
  try {
    let ACCESS_TOKEN;
    ACCESS_TOKEN = await AsyncStorage.getItem('allVolleyballToken');
    let response;
    response = await axios.get('http://10.0.3.2:3010/api/Games');
    const filteredGames = response.data.filter((game) => game.creatorId === userId);
    console.log(filteredGames);
    // response = await axios.get(`http://10.0.3.2:3010/api/Profiles/${userId}/games`, {
    //   headers: {
    //     Authorization: ACCESS_TOKEN
    //   }
    // });
    console.log(response);
    let requests = [];
    let games;
    games = await Promise.all(filteredGames.map(async (game) => {
      let request;
      request = await axios.get(`http://10.0.3.2:3010/api/Games/${game.id}/requestsToGame`);
      console.log(request);
      requests = [...requests, ...request.data];
      return true;
    }));
    console.log(requests);
    dispatch({ type: SET_REQUESTS, payload: requests });
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
  }
};

export const approveJoinGameRequest = (requestId) => async (dispatch) => {
  try {
    let ACCESS_TOKEN;
    ACCESS_TOKEN = await AsyncStorage.getItem('allVolleyballToken');
    let response;
    response = await axios.patch(`http://10.0.3.2:3010/api/RequestToGames/${requestId}`, { status: 'approved' }, {
      headers: {
        Authorization: ACCESS_TOKEN
      }
    });
    console.log(response);
    dispatch({ type: APPROVE_REQUEST });
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
  }
};
