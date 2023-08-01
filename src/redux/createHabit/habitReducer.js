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
      return { ...state, isCreateHabit: false };

    case action.CREATE_HABIT:
      return { ...state, habit: payload };

    default:
      return state;
  }
};

export default habitReducer;
