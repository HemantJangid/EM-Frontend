import { ADD_USER } from "./../actions/types";

const initialState = {
  userDetails: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return action.data;

    default:
      return state;
  }
};
