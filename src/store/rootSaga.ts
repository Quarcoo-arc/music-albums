import { all, fork } from "redux-saga/effects";
import { watchGetAllAlbums } from "./Album/sagas";
import { watchGetAlbumPics } from "./Album/GetAlbum/sagas";
import { watchDeleteAlbum } from "./Album/DeleteAlbum/sagas";

const rootSaga = function* () {
  yield all([
    fork(watchGetAllAlbums),
    fork(watchGetAlbumPics),
    fork(watchDeleteAlbum),
  ]);
};

export default rootSaga;
