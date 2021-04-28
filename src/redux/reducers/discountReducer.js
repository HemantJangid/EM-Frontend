import { ADD_CODE } from "../actions/types";

const initialState = {
  discount: {
    discountApplied: false,
    discount_code: "NO-PROMO-CODE",
    percent: 0,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CODE:
      return action.data;

    default:
      return state;
  }
};
