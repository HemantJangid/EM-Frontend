import { ADD_USER } from "./types";

export const addUser = (item_data) => {
  return (dispatch) => {
    return dispatch({ type: ADD_USER, data: item_data });
  };
};
