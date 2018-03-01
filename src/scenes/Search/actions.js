import axios from 'axios';
import moment from 'moment';

import { FETCH_GAMES } from '../Game/GameScreen/actions';
import { getGameInfo } from '../../actions/games';

export const UPDATE_SEARCH_FILTER = 'UPDATE_SEARCH_FILTER';

const myFilter = (game, filter) => {
  if (!filter) return true;
  const sameCity = filter.city ? game.gym.city === filter.city : true;
  const costIsLower = filter.cost ? game.cost <= filter.cost : true;
  const kindOfSportIsSame = filter.kindOfSportsId ? game.kindOfSportsId === filter.kindOfSportsId : true;
  const startTimeIsAfter = filter.startTime ? moment(game.startTime).isAfter(filter.startTime) : true;
  return costIsLower && kindOfSportIsSame && startTimeIsAfter && sameCity;
};

export const updateSearchFilter = (updateFieldName, updateValue) => ({
  type: UPDATE_SEARCH_FILTER,
  payload: {
    [updateFieldName]: updateValue
  }
});

export const findGames = (filter) => async (dispatch) => {
  try {
    const link = `http://134513.simplecloud.ru:3010/api/Games/find-by-filter?filter=${encodeURIComponent(JSON.stringify(filter))}`;
    let response;
    // response = await axios.get(link);
    response = await axios.get('http://134513.simplecloud.ru:3010/api/Games');
    console.log(filter);
    console.log(response.data);
    response.data = response.data.filter((game) => myFilter(game, filter));
    let games;
    games = await Promise.all(response.data.map(async (game) => {
      let result;
      result = await getGameInfo(game.id);
      return result;
    }));
    dispatch({ type: FETCH_GAMES, payload: games });
  } catch (e) {
    console.log(e.request);
    console.log(e.response);
  }
};
