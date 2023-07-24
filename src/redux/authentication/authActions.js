import axios from "axios";
import { LOGIN_USER } from "./authActionType";

export const loginUser = (data) => {
  return {
    type: LOGIN_USER,
    payload: data,
  };
};
export const loginApiCall = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/api/auth/login", { ...userData });
      console.log("console",response.data);
      dispatch(loginUser(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
