import { put, call, delay } from "redux-saga/effects";
import actions from "../actions";
import httpClient from "../../utils/httpClient";
import Router from "next/router";

export function* sagaTicketCreate(payload) {
  try {
    yield put(actions.ticketCreateFetching());
    yield delay(2000);
    const response = yield call(
      httpClient.post,
      "/api/ticket",
      payload.payload
    );
    yield put(actions.ticketCreateSuccess(response.data));
    Router.push("/");
  } catch (error) {
    yield put(actions.ticketCreateFailed());
  }
}
