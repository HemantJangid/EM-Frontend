import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import warrantyReducer from "./warrantyReducer";
import discountReducer from "./discountReducer";

const rootReducer = combineReducers({
  cartReducer: cartReducer,
  userReducer: userReducer,
  warrantyReducer: warrantyReducer,
  discountReducer: discountReducer,
});

export default rootReducer;
