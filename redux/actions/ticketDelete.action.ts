import * as actionTypes from "../saga/actionTypes";

export const deleteTicket = (payload, dispatch) => ({
  type: actionTypes.TICKET_DELETE_REQUEST,
  payload,
  dispatch,
});

export default {
  deleteTicket,
};
