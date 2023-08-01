import * as actions from "./newHabitTypes";

const initialState = {
  id: "",
  name: "",
  startDate: "",
  endDate: "",
  goal: "1 times",
  repeat: "daily",
  color: "blue",
  label: [],
};

export const newHabitReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.ADD_NAME:
      return { ...state, name: payload };

    case actions.ADD_START_DATE:
      return { ...state, startDate: payload };

    case actions.ADD_END_DATE:
      return { ...state, endDate: payload };
    case actions.ADD_GOAL:
      return { ...state, goal: payload };
    case actions.ADD_REPEAT: {
      return { ...state, repeat: payload };
    }
    case actions.ADD_COLOR:
      return { ...state, color: payload };
    case actions.ADD_LABEL:
      return { ...state, label: [...state.label, payload] };
    default:
      return state;
  }
};
