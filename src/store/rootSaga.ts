import { all, fork } from "redux-saga/effects";
import { watchGetAllAlbums } from "./Album/sagas";

const rootSaga = function* () {
  yield all([fork(watchGetAllAlbums)]);
};

export default rootSaga;
