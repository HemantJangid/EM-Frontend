import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import warrantyReducer from "./warrantyReducer";

const rootReducer = combineReducers({
  cartReducer: cartReducer,
  userReducer: userReducer,
  warrantyReducer: warrantyReducer,
});

export default rootReducer;
