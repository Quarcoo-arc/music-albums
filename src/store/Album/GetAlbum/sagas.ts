import { GET_ALBUM_PICS_URL } from "helpers/urls";
import { GET_ALBUM_PICS } from "./types";
import { getRequest } from "helpers/httpRequests";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { getAlbumPicsErrorAction, getAlbumPicsSuccessAction } from "./reducer";

type AnyAction = { type: string; [key: string]: any };
function* getAlbumPicsSaga({ payload: { id } }: AnyAction) {
  try {
    const response: [] = yield call(
      getRequest,
      GET_ALBUM_PICS_URL + `?albumId=${id}`
    );
    yield put(getAlbumPicsSuccessAction(response));
  } catch (error) {
    yield put(getAlbumPicsErrorAction(error));
  }
}

export function* watchGetAlbumPics() {
  yield takeEvery(GET_ALBUM_PICS, getAlbumPicsSaga);
}

function* getAlbumPics() {
  yield all([fork(watchGetAlbumPics)]);
}

export default getAlbumPics;
