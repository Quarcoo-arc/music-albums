import { DELETE_ALBUM } from "./types";
import { deleteRequest } from "helpers/httpRequests";
import { GET_ALBUMS_URL } from "helpers/urls";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { deleteAlbumErrorAction, deleteAlbumSuccessAction } from "./reducer";

type AnyAction = { type: string; [key: string]: any };
function* deleteAlbumSaga({ payload: { id } }: AnyAction) {
  try {
    const response: {} = yield call(deleteRequest, GET_ALBUMS_URL + `/${id}`);
    yield put(deleteAlbumSuccessAction(response));
  } catch (error) {
    yield put(deleteAlbumErrorAction(error));
  }
}

export function* watchDeleteAlbum() {
  yield takeEvery(DELETE_ALBUM, deleteAlbumSaga);
}

function* deleteAlbum() {
  yield all([fork(watchDeleteAlbum)]);
}

export default deleteAlbum;
