import { takeEvery, all } from "redux-saga/effects";
import { sagaTicketList } from "./ticketList.saga";
import { sagaStatusList } from "./statusList.saga";
import { sagaStatusByIdList } from "./statusByIdList.saga";
import { sagaTicketCreate } from "./ticketCreate.saga";
import { sagaTicketEdit } from "./ticketEdit.saga";
import { sagaTicketDelete } from "./ticketDelete.saga";

import * as actionTypes from "./actionTypes";

// Watch Ticket
function* watchTicketListRequest() {
  yield takeEvery(actionTypes.TICKET_LIST_REQUEST, sagaTicketList);
}

// watch Status List
function* watchStatusListRequest() {
  yield takeEvery(actionTypes.STATUS_LIST_REQUEST, sagaStatusList);
}

// watch Status By Id List
function* watchStatusByIdListRequest() {
  yield takeEvery(actionTypes.STATUS_BY_ID_LIST_REQUEST, sagaStatusByIdList);
}

// watch Ticket Create
function* watchTicketCreateRequest() {
  yield takeEvery(actionTypes.TICKET_CREATE_REQUEST, sagaTicketCreate);
}

// watch Ticket Edit
function* watchTicketEditRequest() {
  yield takeEvery(actionTypes.TICKET_EDIT_REQUEST, sagaTicketEdit);
}

// watch Ticket Delete
function* watchTicketDeleteRequest() {
  yield takeEvery(actionTypes.TICKET_DELETE_REQUEST, sagaTicketDelete);
}

export default function* rootSaga() {
  yield all([
    watchTicketListRequest(),
    watchStatusListRequest(),
    watchStatusByIdListRequest(),
    watchTicketCreateRequest(),
    watchTicketEditRequest(),
    watchTicketDeleteRequest(),
  ]);
}
