import { put, call } from "redux-saga/effects";
import actions from "./../actions";
import httpClient from "./../../utils/httpClient";

export function* sagaTicketList(payload) {
  try {
    yield put(actions.ticketListFetching());
    const response = yield call(httpClient.get, "/api/ticket");
    yield put(actions.ticketListSuccess(response.data));
  } catch (error) {
    yield put(actions.ticketListFailed());
  }
}
