import { SET_ADDRESS, SET_TELL } from "../../../redux/reducers/cart/const";

export const inputText = {
  placeholder: "Dirección",
  nameReducer: "cart",
  keyState: "address",
  type: SET_ADDRESS,
};
export const inputTell = {
  placeholder: "Telefono",
  nameReducer: "cart",
  keyState: "tell",
  type: SET_TELL,
};
