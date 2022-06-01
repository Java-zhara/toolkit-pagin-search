import { all } from 'redux-saga/effects';
import { getPostsWatcher } from './reduсers/Saga';

export function* rootSaga(): Generator {
  yield all([getPostsWatcher()]);
}
