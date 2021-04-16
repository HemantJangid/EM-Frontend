import { ADD_DATA } from "./../actions/types";

const initialState = {
  warranty: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return action.data;

    default:
      return state;
  }
};
