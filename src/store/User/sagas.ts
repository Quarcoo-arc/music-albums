import { GET_USER_URL } from "helpers/urls";
import { GET_USER } from "./types";
import { getRequest } from "helpers/httpRequests";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { getUserErrorAction, getUserSuccessAction } from "./reducer";

type AnyAction = { type: string; [key: string]: any };
function* getUserSaga({ payload: { id } }: AnyAction) {
  try {
    const response: {} = yield call(getRequest, GET_USER_URL + `/${id}`);
    yield put(getUserSuccessAction(response));
  } catch (error) {
    yield put(getUserErrorAction(error));
  }
}

export function* watchGetUser() {
  yield takeEvery(GET_USER, getUserSaga);
}

function* getUser() {
  yield all([fork(watchGetUser)]);
}

export default getUser;
