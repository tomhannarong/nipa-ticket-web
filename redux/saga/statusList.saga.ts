import { put, call } from "redux-saga/effects";
import actions from "./../actions";
import httpClient from "./../../utils/httpClient";

export function* sagaStatusList(payload) {
  try {
    yield put(actions.statusListFetching());
    const response = yield call(httpClient.get, "/api/status");
    yield put(actions.statusListSuccess(response.data));
  } catch (error) {
    yield put(actions.statusListFailed());
  }
}
