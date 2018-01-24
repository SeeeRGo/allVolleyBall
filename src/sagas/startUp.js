import { all, fork, put, call } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import ProfileApi from '../api/Profile';
import * as userActions from '../actions/user';
import * as loadingsActions from '../actions/loadings';

export function* startApp() {
  try {
    yield put(loadingsActions.startLoading('initApp'));
    const tokenId = yield AsyncStorage.getItem('tokenId');
    if (!tokenId) {
      return;
    }
    const Profile = new ProfileApi();
    const user = yield call([Profile, Profile.getMyProfile]);
    if (!user) {
      return;
    }
    yield put(userActions.setUser(user));
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
