import { action } from "../../../utils/action";
import { SET_EMAIL, SET_TOKEN } from "./const";

export const logout = () => {
  return async (dispatch) => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    dispatch(action(SET_EMAIL, null));
    dispatch(action(SET_TOKEN, null));
  };
};
