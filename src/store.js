import { combineReducers, createStore, applyMiddleware } from "redux";
import { userReducer } from "./userReducer";
import { employeeReducer } from "./employeeReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk, logger);
const reducer = combineReducers({
  userList: userReducer,
  employeeList: employeeReducer
});
const store = createStore(reducer, middleware);

export default store;
