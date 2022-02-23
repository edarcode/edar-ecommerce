import { SET_EMAIL, SET_PASSWORD } from "../../redux/reducers/login/const";

export const inputText = {
  placeholder: "Email",
  nameReducer: "login",
  keyState: "email",
  type: SET_EMAIL,
};
export const inputPassword = {
  placeholder: "Password",
  nameReducer: "login",
  keyState: "password",
  type: SET_PASSWORD,
};
