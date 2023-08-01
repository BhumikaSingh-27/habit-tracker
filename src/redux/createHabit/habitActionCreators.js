import axios from "axios";
import toastNotify from "../../utils/toastNotify";
import store from "../Store";
import {
  CREATE_HABIT,
  CREATE_MODAL_CLOSE,
  CREATE_MODAL_OPEN,
} from "./habitTypes";

export const isCreateNewabit = () => {
  return {
    type: CREATE_MODAL_OPEN,
  };
};
export const closeCreateModal = () => {
  return {
    type: CREATE_MODAL_CLOSE,
  };
};

export const createHabit = (data) => {
  return {
    type: CREATE_HABIT,
    payload: data,
  };
};


//thunk creator for creating habit
export const createNewHabit = (habitData) => {
  const state = store.getState();

  return async (dispatch) => {
    try {
      const response = await axios.post(
        "/api/habits",
        { habit: { ...habitData } },
        {
          headers: {
            authorization: state.auth.encodedToken,
          },
        }
      );
      // console.log(response.data.habits);
      dispatch(createHabit(response.data.habits))
    } catch (e) {
      console.log(e);
    }
  };
};
