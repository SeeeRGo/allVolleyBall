import { all, put, call, takeEvery, fork } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import ProfileApi from '../api/Profile';
import * as userActions from '../actions/user';
import * as loadingsActions from '../actions/loadings';
import { resetCredentials } from '../scenes/Login/actions';

export function* register(action) {
  try {
    yield put(loadingsActions.startLoading('isRegistration'));
    const { payload } = action;
    const user = { ...payload.user };
    delete user.secondPassword;
    yield call([ProfileApi, ProfileApi.create], user);
    yield call([ProfileApi, ProfileApi.login], { username: user.username, password: user.password });
    // eslint-disable-next-line no-restricted-syntax
    for (const sn of payload.socialNetworks) {
      yield call([ProfileApi, ProfileApi.addSocialNetwork], sn);
    }
    const logginedUser = yield call([ProfileApi, ProfileApi.getMyProfile]);
    console.log(logginedUser, 'logginedUser');
    yield put(userActions.setUser(logginedUser));
    Actions.reset('Profile', { id: user.id });
    yield put(userActions.registerSuccess());
  } catch (error) {
    yield put(userActions.registerError(error));
  } finally {
    yield put(loadingsActions.stopLoading('isRegistration'));
  }
}

export function* registerFlow() {
  yield takeEvery(userActions.REGISTER, register);
}

export function* login(action) {
  try {
    yield put(loadingsActions.startLoading('isLogin'));
    const { payload: credentials } = action;
    const user = yield call([ProfileApi, ProfileApi.login], credentials);
    yield put(userActions.setUser(user));
    yield put(resetCredentials());
    yield put(userActions.loginSuccess());
    Actions.pop();
    Actions.reset('Profile', { id: user.id });
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
    yield call([ProfileApi, ProfileApi.logout]);
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
    const user = yield call([ProfileApi, ProfileApi.getMyProfile]);
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

export function* loginBySocialNetwork(action) {
  try {
    const { payload: token } = action;
    yield put(loadingsActions.startLoading('loginBySocialNetwork'));
    yield ProfileApi.setToken(token);
    const user = yield call([ProfileApi, ProfileApi.getMyProfile]);
    yield put(userActions.setUser(user));
    yield put(userActions.loginBySocialNetworkSuccess());
    Actions.reset('Profile', { id: user.id });
  } catch (error) {
    yield put(userActions.loginBySocialNetworkError(error));
  } finally {
    yield put(loadingsActions.stopLoading('loginBySocialNetwork'));
  }
}

export function* loginBySocialNetworkFlow() {
  yield takeEvery(userActions.LOGIN_BY_SOCIAL_NETWORK, loginBySocialNetwork);
}

export default function* () {
  yield all([
    fork(registerFlow),
    fork(loginFlow),
    fork(logoutFlow),
    fork(loginBySocialNetworkFlow)
  ]);
}
