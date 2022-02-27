import { action } from "../../../utils/action";
import { axiosPut } from "../../../utils/axios";
import { CLEAN_RESET_PASSWORD, SET_RES_UPDATE_PASSWORD } from "./const";

export const updatePassword = ({ password, token }) => {
  return async (dispatch) => {
    const resUpdatePassword = await axiosPut({
      url: "/users/reset/password",
      headers: { token },
      data: { password },
    });
    dispatch(action(SET_RES_UPDATE_PASSWORD, resUpdatePassword));
  };
};

export const cleanResetPassword = () => {
  return (dispatch) => {
    dispatch(action(CLEAN_RESET_PASSWORD));
  };
};
