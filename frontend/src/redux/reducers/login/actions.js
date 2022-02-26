import { action } from "../../../utils/action";
import { axiosPost } from "../../../utils/axios";
import { SET_EMAIL, SET_TOKEN } from "../storage/const";
import { SET_IS_LOGIN } from "./const";

export const getToken = ({ data }) => {
  return async (dispatch) => {
    const { token, msg, email } = await axiosPost({
      url: "/users/signin",
      data,
    });
    token && localStorage.setItem("token", token);
    token && localStorage.setItem("email", email);
    token && dispatch(action(SET_TOKEN, token)); //va al reducer de storage
    token && dispatch(action(SET_EMAIL, email)); //va al reducer de storage
    token && dispatch(action(SET_IS_LOGIN, true));
    msg && dispatch(action(SET_IS_LOGIN, false));
  };
};
