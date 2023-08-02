import { getLocalData } from "../../utils/localData";
import { LOGIN_USER, SIGNUP_USER } from "./authActionType";

const initialState = {
  user: getLocalData("user") ?? [],
  encodedToken: getLocalData("token") ?? "",
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        user: payload.foundUser,
        encodedToken: payload.encodedToken,
      };

    case SIGNUP_USER:
      return {
        ...state,
        user: payload.createdUser,
        encodedToken: payload.encodedToken,
      };

    default:
      return state;
  }
};
