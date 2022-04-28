import { put, call, takeEvery } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";

import {
  postsFetching,
  postsFetchingSuccess,
  postsFetchingError,
} from "./PostSlice";

function* getPostsWorker() {
  try {
    const { data }: AxiosResponse = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/posts"
    );
    yield put(postsFetchingSuccess(data));
  } catch {
    yield put(postsFetchingError("Не удалось загрузить посты"));
  }
}

export function* getPostsWatcher(): Generator {
  yield takeEvery(postsFetching.type, getPostsWorker);
}
