import { action } from "../../../utils/action";
import { axiosGet } from "../../../utils/axios";
import { SET_PRODUCTS } from "./const";

export const getAllProducts = ({ page }) => {
  return async (dispatch) => {
    const url = `/products?page=${page}`;
    const allDataProducts = await axiosGet({ url });
    dispatch(action(SET_PRODUCTS, allDataProducts));
  };
};
