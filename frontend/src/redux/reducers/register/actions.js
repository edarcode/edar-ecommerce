import { action } from "../../../utils/action";
import { axiosPost } from "../../../utils/axios";
import { SET_RES_REGISTRO } from "./const";

export const createAccount = ({ setIsSpinner, data }) => {
  setIsSpinner(true);
  return async (dispatch) => {
    const resRegister = await axiosPost({
      url: "/users/signup",
      data,
    });
    setIsSpinner(false);
    dispatch(action(SET_RES_REGISTRO, resRegister));
  };
};
