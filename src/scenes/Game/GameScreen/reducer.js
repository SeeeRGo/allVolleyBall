import { GAME_UPDATE, GAME_CREATE } from './actions';
import uuidv4 from 'uuid/v4';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GAME_CREATE:
    return [...state, { ...action.payload, id: uuidv4() }];
  case GAME_UPDATE:
    const gameById = state.find((game) => game.id === action.payload.id )
    const newState = state.filter((game) => game.id !== action.payload.id)
    return [...newState, { ...gameById, ...action.payload}];
  default:
    return state;
  }
};
