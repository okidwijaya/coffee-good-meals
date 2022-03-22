import { combineReducers } from "redux";
import authReducer from "./auth";
import cartReducer from "./cart";
import promoReducer from "./promo"
import { ACTION_STRING } from "../actions/actionString";
import storage from "redux-persist/lib/storage";


const appReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  promo: promoReducer,
});


// remove persist when logout
const rootReducer = (state, action) => {
  if (action.type === ACTION_STRING.authLogout) {
    storage.removeItem('persist:root');
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;