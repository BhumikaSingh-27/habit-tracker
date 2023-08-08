import * as actions from "./newHabitTypes";

const initialState = {
  id: "",
  name: "",
  startDate: "",
  endDate: "",
  goal: "",
  repeat: "",
  label: [],
  completed: false,
  archive: false,
  trash: false,
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
    case actions.ADD_LABEL:
      if (payload.checked) {
        console.log({ ...state, label: [...state?.label, payload.value] });
        return { ...state, label: [...state?.label, payload.value] };
      } else {
        return {
          ...state,
          label: state.label.filter((ele) => ele !== payload.value),
        };
      }

    case actions.EDIT_LABEL: {
      return { ...state, label: payload };
    }
    case actions.RESET: {
      return { state: initialState };
    }
    default:
      return state;
  }
};
