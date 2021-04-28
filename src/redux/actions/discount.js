import { ADD_CODE } from "./types";

export const addCode = (item_data) => {
  return (dispatch) => {
    return dispatch({ type: ADD_CODE, data: item_data });
  };
};
