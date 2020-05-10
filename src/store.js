import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {};
const middleware = [thunk];
const store = createStore(
  () => {}, // here we have to call rootReducer
  initialState,
  applyMiddleware(...middleware)
);
export default store;
