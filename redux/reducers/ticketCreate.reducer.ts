import { TicketCreateReducer } from "../../types/ticketCreate.reducer.types";
import * as actions from "../saga/actionTypes";

const initialState: TicketCreateReducer = {
  result: null,
  isFailed: false,
  isFetching: false,
};

const Reducer = (
  state = initialState,
  { type, payload }
): TicketCreateReducer => {
  switch (type) {
    case actions.TICKET_CREATE_FETCHING:
      return { ...state, result: null, isFetching: true, isFailed: false };
    case actions.TICKET_CREATE_FAILED:
      return { ...state, result: null, isFetching: false, isFailed: true };
    case actions.TICKET_CREATE_SUCCESS:
      return { ...state, result: payload, isFetching: false, isFailed: false };
    default:
      return state;
  }
};

export default Reducer;
