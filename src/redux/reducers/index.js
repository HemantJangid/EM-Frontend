import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  cartReducer: cartReducer,
  userReducer: userReducer,
});

export default rootReducer;
