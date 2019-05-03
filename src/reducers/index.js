import { combineReducers } from "redux";
import datesReducer from "./datesReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  dates: datesReducer,
  error: errorReducer
});
