import { ADD_DATA } from "./types";

export const addWarrantyData = (warranty_data) => {
  return (dispatch) => {
    return dispatch({ type: ADD_DATA, data: warranty_data });
  };
};
