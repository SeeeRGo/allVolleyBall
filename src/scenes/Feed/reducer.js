import { CHANGE_SELECTION } from './actions';

const INITIAL_STATE = {
  feedFooterButtons: 0,
  myGamesSubHeaderButtons: 0,
  gameListItemDisplay: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_SELECTION:
    return {
      ...state,
      ...action.payload
    };
  default:
    return state;
  }
};
