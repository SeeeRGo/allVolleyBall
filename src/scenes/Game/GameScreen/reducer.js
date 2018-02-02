import uuidv4 from 'uuid/v4';
import { GAME_UPDATE, GAME_CREATE } from './actions';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GAME_CREATE:
    return [...state, { ...action.payload, gameId: uuidv4() }];
  case GAME_UPDATE:
    const gameById = state.find((game) => game.gameId === action.payload.gameId);
    const newState = state.filter((game) => game.gameId !== action.payload.gameId);
    return [...newState, { ...gameById, ...action.payload.updates }];
  default:
    return state;
  }
};
