import axios from 'axios';
import moment from 'moment';

export const GAME_UPDATE = 'GAME_UPDATE';
export const GAME_CREATE = 'GAME_CREATE';
export const FETCH_GAMES = 'FETCH_GAMES';

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

export const createGame = (formData) => async (dispatch) => {
  try {
    const {
      gameDate, gameTime, minPlayers, maxPlayers,
      gameEndTime, gameStartTime, price
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
      creatorId: 1,
      kindOfSportsId: 1,
      gameTypeId: 1
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
    const { data } = await axios.get('http://10.0.3.2:3010/api/Games');
    dispatch({ type: FETCH_GAMES, payload: data });
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
  }
};
