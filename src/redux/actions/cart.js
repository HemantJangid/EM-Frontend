import { ADD_ITEM } from "./types";

export const addItem = (item_data) => {
  return (dispatch) => {
    return dispatch({ type: ADD_ITEM, data: item_data });
  };
};
