import { put, call } from "redux-saga/effects";
import actions from "../actions";
import httpClient from "../../utils/httpClient";
import { kResultOk, kResultNok } from "../../utils/contants";

export function* sagaTicketDelete({ payload, dispatch }: any) {
  try {
    const response = yield call(httpClient.delete, `api/ticket/${payload}`);
    if (response.data) {
      dispatch(actions.feedTicketList());
    }
  } catch (error) {
    // Nothing
  }
}
