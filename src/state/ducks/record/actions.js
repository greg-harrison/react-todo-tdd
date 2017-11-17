import * as types from "./types";

export const fetchRecords = (data) => ({
  type: types.FETCH_RECORDS,
  payload: {
    data
  }
});

export const addRecord = (draft) => ({
  type: types.ADD_RECORD,
  payload: {
    draft
  }
});
