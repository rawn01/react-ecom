import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import menuReducer from "./data/dataReducer";
import shopReducer from "./shop/shopReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  menu: menuReducer,
  shop: shopReducer
});

export default rootReducer;