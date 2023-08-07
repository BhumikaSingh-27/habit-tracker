import * as action from "./habitTypes";

export const habitState = {
  isCreateHabit: false,
  isEditHabit: false,
  habit: [],
  labels: [],
  archive: [],
  trash: [],
};

const habitReducer = (state = habitState, { type, payload }) => {
  switch (type) {
    case action.CREATE_MODAL_OPEN:
      return { ...state, isCreateHabit: true };
    case action.CREATE_MODAL_CLOSE:
      return { ...state, isCreateHabit: false, isEditHabit: false };

    case action.EDIT_MODAL_OPEN: {
      return { ...state, isEditHabit: true };
    }
    case action.EDIT_MODAL_CLOSE:
      return { ...state, isEditHabit: false };

    case action.CREATE_HABIT:
      console.log(payload);
      console.log(state);
      return { ...state, habit: payload };

    case action.COMPLETE:
      return {
        ...state,
        habit: state.habit.map((data) =>
          data._id === payload ? { ...data, completed: true } : data
        ),
      };

    default:
      return state;
  }
};

export default habitReducer;
