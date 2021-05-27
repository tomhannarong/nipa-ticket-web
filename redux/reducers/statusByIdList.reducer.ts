import { StatusByIdListReducer } from "./../../types/statusByIdList.reducer.types";
import * as actions from "../saga/actionTypes";

const initialState: StatusByIdListReducer = {
  result: null,
  isFailed: false,
  isFetching: false,
};

const Reducer = (
  state = initialState,
  { type, payload }
): StatusByIdListReducer => {
  switch (type) {
    case actions.STATUS_BY_ID_LIST_FETCHING:
      return { ...state, result: null, isFetching: true, isFailed: false };
    case actions.STATUS_BY_ID_LIST_FAILED:
      return { ...state, result: null, isFetching: false, isFailed: true };
    case actions.STATUS_BY_ID_LIST_SUCCESS:
      return { ...state, result: payload, isFetching: false, isFailed: false };
    default:
      return state;
  }
};

export default Reducer;
