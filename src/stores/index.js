import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducers/userReducer";
import mailReducer from "./reducers/mailReducer";
import customerReducer from "./reducers/customerReducer";
import contactReducer from "./reducers/contactReducer";

const rootReducer = combineReducers({
  userState : userReducer,
  mailState : mailReducer,
  customerState : customerReducer,
  contactState : contactReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => console.warn("cek state store", store.getState()));

export default store;
