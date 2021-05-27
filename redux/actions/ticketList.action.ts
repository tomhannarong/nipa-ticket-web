import * as actionTypes from "../saga/actionTypes";

export const feedTicketList = () => ({
  type: actionTypes.TICKET_LIST_REQUEST,
});

export const ticketListFetching = () => ({
  type: actionTypes.TICKET_LIST_FETCHING,
});

export const ticketListSuccess = (payload) => ({
  type: actionTypes.TICKET_LIST_SUCCESS,
  payload,
});

export const ticketListFailed = () => ({
  type: actionTypes.TICKET_LIST_FAILED,
});

export default {
  feedTicketList,
  ticketListFetching,
  ticketListSuccess,
  ticketListFailed,
};
