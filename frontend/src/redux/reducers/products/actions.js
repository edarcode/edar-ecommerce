import { action } from "../../../utils/action";
import { axiosGet } from "../../../utils/axios";
import { SET_PRODUCTS } from "./const";

export const getAllProducts = () => {
  return async (dispatch) => {
    const allDataProducts = await axiosGet({ url: "/products" });
    dispatch(action(SET_PRODUCTS, allDataProducts));
  };
};
