import { combineReducers } from "redux";
import { authReducer } from "./authentication/authReducer";
import habitReducer from "./createHabit/habitReducer";

const rootReducer = combineReducers({ auth: authReducer, habit: habitReducer});

export default rootReducer;
