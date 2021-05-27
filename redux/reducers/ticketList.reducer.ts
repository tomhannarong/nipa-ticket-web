import { TicketListReducer } from "./../../types/ticketList.reducer.types";
import * as actions from "../saga/actionTypes";

const initialState: TicketListReducer = {
  result: null,
  isFailed: false,
  isFetching: false,
};

const Reducer = (
  state = initialState,
  { type, payload }
): TicketListReducer => {
  switch (type) {
    case actions.TICKET_LIST_FETCHING:
      return { ...state, result: null, isFetching: true, isFailed: false };
    case actions.TICKET_LIST_FAILED:
      return { ...state, result: null, isFetching: false, isFailed: true };
    case actions.TICKET_LIST_SUCCESS:
      return { ...state, result: payload, isFetching: false, isFailed: false };
    default:
      return state;
  }
};

export default Reducer;
