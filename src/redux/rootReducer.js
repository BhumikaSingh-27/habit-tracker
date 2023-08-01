import { combineReducers } from "redux";
import { authReducer } from "./authentication/authReducer";
import habitReducer from "./createHabit/habitReducer";
import { newHabitReducer } from "./newHabit/newHabitReducer";

const rootReducer = combineReducers({ auth: authReducer, habit: habitReducer, new:newHabitReducer});

export default rootReducer;
