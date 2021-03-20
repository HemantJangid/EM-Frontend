import { ADD_ITEM } from "./../actions/types";

const initialState = {
  cartDetails: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, cartDetails: action.data };

    default:
      return state;
  }
};
