import * as actionTypes from "../saga/actionTypes";

export const feedStatusByIdList = (payload) => ({
  type: actionTypes.STATUS_BY_ID_LIST_REQUEST,
  payload,
});

export const statusByIdListFetching = () => ({
  type: actionTypes.STATUS_BY_ID_LIST_FETCHING,
});

export const statusByIdListSuccess = (payload) => ({
  type: actionTypes.STATUS_BY_ID_LIST_SUCCESS,
  payload,
});

export const statusByIdListFailed = () => ({
  type: actionTypes.STATUS_BY_ID_LIST_FAILED,
});

export default {
  feedStatusByIdList,
  statusByIdListFetching,
  statusByIdListSuccess,
  statusByIdListFailed,
};
