import * as actionTypes from "../saga/actionTypes";

export const feedStatusList = () => ({
  type: actionTypes.STATUS_LIST_REQUEST,
});

export const statusListFetching = () => ({
  type: actionTypes.STATUS_LIST_FETCHING,
});

export const statusListSuccess = (payload) => ({
  type: actionTypes.STATUS_LIST_SUCCESS,
  payload,
});

export const statusListFailed = () => ({
  type: actionTypes.STATUS_LIST_FAILED,
});

export default {
  feedStatusList,
  statusListFetching,
  statusListSuccess,
  statusListFailed,
};
