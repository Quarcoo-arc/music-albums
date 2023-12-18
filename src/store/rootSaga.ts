import { all, fork } from "redux-saga/effects";
import { watchGetAllAlbums } from "./Album/sagas";
import { watchGetAlbumPics } from "./Album/GetAlbum/sagas";

const rootSaga = function* () {
  yield all([fork(watchGetAllAlbums), fork(watchGetAlbumPics)]);
};

export default rootSaga;
