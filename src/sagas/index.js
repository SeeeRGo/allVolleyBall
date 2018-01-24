import { all } from 'redux-saga/effects';
import userSaga from './user';
import startUpSaga from './startUp';

export default function* () {
  yield all([
    userSaga(),
    startUpSaga()
  ]);
}
