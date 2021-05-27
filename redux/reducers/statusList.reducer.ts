import { StatusListReducer } from "./../../types/statusList.reducer.types";
import * as actions from "../saga/actionTypes";

const initialState: StatusListReducer = {
  result: null,
  isFailed: false,
  isFetching: false,
};

const Reducer = (
  state = initialState,
  { type, payload }
): StatusListReducer => {
  switch (type) {
    case actions.STATUS_LIST_FETCHING:
      return { ...state, result: null, isFetching: true, isFailed: false };
    case actions.STATUS_LIST_FAILED:
      return { ...state, result: null, isFetching: false, isFailed: true };
    case actions.STATUS_LIST_SUCCESS:
      return { ...state, result: payload, isFetching: false, isFailed: false };
    default:
      return state;
  }
};

export default Reducer;
