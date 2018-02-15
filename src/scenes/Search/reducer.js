import moment from 'moment';
import { UPDATE_SEARCH_FILTER } from './actions';

const INITIAL_STATE = {
  cityOrDistrict: 'city',
  gameOrGym: 'game',
  gameType: 0,
  startTime: moment(),
  startDate: moment(),
  paidOrFree: 'free',
  price: 0
};

export default (state = INITIAL_STATE, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
  case UPDATE_SEARCH_FILTER:
    return {
      ...state,
      ...action.payload
    };
  default:
    return state;
  }
};
