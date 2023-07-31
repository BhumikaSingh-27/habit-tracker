import axios from "axios";
import toastNotify from "../../utils/toastNotify";
import { CREATE_HABIT, CREATE_MODAL_CLOSE, CREATE_MODAL_OPEN, IS_CREATE_NEW } from "./habitTypes";
import { useSelector } from "react-redux";


export const isCreateNewabit = () =>{
    return {
        type:CREATE_MODAL_OPEN
    }
}
export const closeCreateModal = () =>{
    return {
        type: CREATE_MODAL_CLOSE
    }
}

export const creteHabit = (data) => {
  return {
    type: CREATE_HABIT,
    payload: data,
  };
};

//thunk creator for creating habit

export const createNewHabit = (habitData) => {
  return async (state, dispatch) => {
    try {
      const response = await axios(
        "/api/habits",
        { habit: { ...habitData } },
        {
          headers: {
            authorization: state.auth.encodedToken,
          },
        }
      );
      console.log(response);
    } catch (e) {
      toastNotify("error", `${e.response.data.errors[0].split(".")[0]}!`);
    }
  };
};
