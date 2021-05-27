import { put, call } from "redux-saga/effects";
import actions from "../actions";
import httpClient from "../../utils/httpClient";
import Router from "next/router";

export function* sagaTicketEdit(payload) {
  try {
    yield put(actions.ticketEditFetching());
    const response = yield call(
      httpClient.put,
      `/api/ticket/${payload.id}`,
      payload.payload
    );
    yield put(actions.ticketEditSuccess(response.data));
    Router.push("/");
  } catch (error) {
    yield put(actions.ticketEditFailed());
  }
}
