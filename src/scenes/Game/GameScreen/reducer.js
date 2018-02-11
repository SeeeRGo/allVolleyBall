import uuidv4 from 'uuid/v4';
import { GAME_UPDATE, GAME_CREATE, FETCH_GAMES } from './actions';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_GAMES:
    return action.payload;
  case GAME_CREATE:
    console.log(action.payload);
    return state;
  case GAME_UPDATE:
    const gameById = state.find((game) => game.gameId === action.payload.gameId);
    const newState = state.filter((game) => game.gameId !== action.payload.gameId);
    return [...newState, { ...gameById, ...action.payload.updates }];
  default:
    return state;
  }
};
