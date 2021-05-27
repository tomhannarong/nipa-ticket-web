import * as actionTypes from "../saga/actionTypes";

export const createTicket = (payload) => ({
  type: actionTypes.TICKET_CREATE_REQUEST,
  payload,
});

export const ticketCreateFetching = () => ({
  type: actionTypes.TICKET_CREATE_FETCHING,
});

export const ticketCreateSuccess = (payload) => ({
  type: actionTypes.TICKET_CREATE_SUCCESS,
  payload,
});

export const ticketCreateFailed = () => ({
  type: actionTypes.TICKET_CREATE_FAILED,
});

export default {
  createTicket,
  ticketCreateFetching,
  ticketCreateSuccess,
  ticketCreateFailed,
};
