import { all, fork, put, select } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import * as userActions from '../actions/user';
import * as loadingsActions from '../actions/loadings';

export function* startApp() {
  try {
    yield put(loadingsActions.startLoading('initApp'));
    const tokenId = yield AsyncStorage.getItem('tokenId');
    if (!tokenId) {
      return;
    }
    yield put(userActions.getMyProfile);
    const userProfile = yield select((state) => state.user.userProfile);
    if (!userProfile) {
      return;
    }
    Actions.replace('Dashboard');
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.error(e, 'startApp error');
  } finally {
    yield put(loadingsActions.stopLoading('initApp'));
  }
}

export default function* () {
  yield all([
    fork(startApp)
  ]);
}
