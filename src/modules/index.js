import { combineReducers } from "redux";
import special from "./special";
import logincheck from "./logincheck";

//루트 리듀서
const rootReducer = combineReducers({special , logincheck})
export default rootReducer;