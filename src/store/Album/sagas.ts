import { GET_ALL_ALBUMS } from "./types";
import { getRequest } from "helpers/httpRequests";
import { GET_ALBUMS_URL } from "helpers/urls";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { getAllAlbumsSuccessAction, getAllAlbumsErrorAction } from "./reducer";

function* getAllAlbumsSaga() {
  try {
    const response: [] = yield call(getRequest, GET_ALBUMS_URL);
    yield put(getAllAlbumsSuccessAction(response));
  } catch (error) {
    yield put(getAllAlbumsErrorAction(error));
  }
}

export function* watchGetAllAlbums() {
  yield takeEvery(GET_ALL_ALBUMS, getAllAlbumsSaga);
}

function* getAllAlbums() {
  yield all([fork(watchGetAllAlbums)]);
}

export default getAllAlbums;
