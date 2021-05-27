import { put, call } from "redux-saga/effects";
import actions from "./../actions";
import httpClient from "./../../utils/httpClient";

export function* sagaStatusByIdList({ payload }: any) {
  try {
    yield put(actions.statusByIdListFetching());
    const response = yield call(httpClient.get, `/api/status/${payload}`);
    yield put(actions.statusByIdListSuccess(response.data));
  } catch (error) {
    yield put(actions.statusByIdListFailed());
  }
}
