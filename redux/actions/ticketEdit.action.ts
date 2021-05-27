import * as actionTypes from "../saga/actionTypes";
import httpClient from "../../utils/httpClient";

export const editTicket = (payload, id) => ({
  type: actionTypes.TICKET_EDIT_REQUEST,
  payload,
  id,
});

export const ticketEditFetching = () => ({
  type: actionTypes.TICKET_EDIT_FETCHING,
});

export const ticketEditSuccess = (payload) => ({
  type: actionTypes.TICKET_EDIT_SUCCESS,
  payload,
});

export const ticketEditFailed = () => ({
  type: actionTypes.TICKET_EDIT_FAILED,
});

export const doGetTicketById = async (id) => {
  const response = await httpClient.get(`/api/ticket/${id}`);
  return response.data;
};

export default {
  editTicket,
  ticketEditFetching,
  ticketEditSuccess,
  ticketEditFailed,
  doGetTicketById,
};
