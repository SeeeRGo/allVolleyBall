import axios from 'axios';

export const GAME_UPDATE = 'GAME_UPDATE';
export const GAME_CREATE = 'GAME_CREATE';
export const FETCH_GAMES = 'FETCH_GAMES';

export const updateGame = (updates, gameId) => async (dispatch) => {
  try {
    let response = await axios.patch(`http://10.0.3.2:3010/api/Games/${gameId}`, updates);
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

export const createGame = (game) => async (dispatch) => {
  try {
    const data = {
      ...game,
      chat: [],
      playerComments: []
    };
    console.log(JSON.stringify(data));
    let response = await axios.post('http://10.0.3.2:3010/api/Games', data);
    dispatch({ type: GAME_CREATE, payload: data });
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
  }
};

export const fetchGames = () => async (dispatch) => {
  try {
    let { data } = await axios.get('http://10.0.3.2:3010/api/Games');
    dispatch({ type: FETCH_GAMES, payload: data });
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
  }
};
