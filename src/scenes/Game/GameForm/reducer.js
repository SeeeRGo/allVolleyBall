import { GAME_FORM_UPDATE } from './actions';
import { SET_GAME } from '../GameScreen/actions';

const INITIAL_STATE = {
  gameType: 'Свободная игра',
  sportType: 'Классический волейбол',
  minPlayers: 0,
  maxPlayers: 0,
  rating: 1,
  price: 0,
  participate: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GAME_FORM_UPDATE:
    return {
      ...state,
      ...action.payload
    };
  case SET_GAME:
    return action.payload;
  default:
    return state;
  }
};
