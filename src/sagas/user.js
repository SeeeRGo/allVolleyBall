import { all, put, call, takeEvery, fork } from 'redux-saga/effects';
import ProfileApi from '../api/Profile';
import * as userActions from '../actions/user';
import * as loadingsActions from '../actions/loadings';

export function* login(action) {
  try {
    yield put(loadingsActions.startLoading('isLogin'));
    const { payload: credentials } = action;
    const Profile = ProfileApi.init();
    const user = yield call([Profile, Profile.login], credentials);
    yield put(userActions.setUser(user));
    yield put(userActions.loginSuccess());
  } catch (error) {
    yield put(userActions.loginError(error));
  } finally {
    yield put(loadingsActions.stopLoading('isLogin'));
  }
}

export function* loginFlow() {
  yield takeEvery(userActions.LOGIN, login);
}

export function* logout() {
  try {
    yield put(loadingsActions.startLoading('logout'));
    const Profile = ProfileApi.init();
    yield call([Profile, Profile.logout]);
    yield put(userActions.resetUser());
    yield put(userActions.logoutSuccess());
  } catch (error) {
    yield put(userActions.logoutError(error));
  } finally {
    yield put(loadingsActions.stopLoading('logout'));
  }
}

export function* logoutFlow() {
  yield takeEvery(userActions.LOGOUT, logout);
}

export function* gettingMyProfile() {
  try {
    yield put(loadingsActions.startLoading('gettingMyProfile'));
    const Profile = ProfileApi.init();
    const user = yield call([Profile, Profile.gettingMyProfile]);
    yield put(userActions.setUser(user));
    yield put(userActions.getMyProfileSuccess());
  } catch (error) {
    yield put(userActions.getMyProfileError(error));
  } finally {
    yield put(loadingsActions.stopLoading('gettingMyProfile'));
  }
}

export function* gettingMyProfileFlow() {
  yield takeEvery(userActions.GET_MY_PROFILE, gettingMyProfile);
}

export default function* () {
  yield all([
    fork(loginFlow),
    fork(logoutFlow),
    fork(gettingMyProfileFlow)
  ]);
}
