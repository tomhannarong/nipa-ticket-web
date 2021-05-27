import { TicketEditReducer } from "../../types/ticketEdit.reducer.types";
import * as actions from "../saga/actionTypes";

const initialState: TicketEditReducer = {
  result: null,
  isFailed: false,
  isFetching: false,
};

const Reducer = (
  state = initialState,
  { type, payload }
): TicketEditReducer => {
  switch (type) {
    case actions.TICKET_EDIT_FETCHING:
      return { ...state, result: null, isFetching: true, isFailed: false };
    case actions.TICKET_EDIT_FAILED:
      return { ...state, result: null, isFetching: false, isFailed: true };
    case actions.TICKET_EDIT_SUCCESS:
      return { ...state, result: payload, isFetching: false, isFailed: false };
    default:
      return state;
  }
};

export default Reducer;
