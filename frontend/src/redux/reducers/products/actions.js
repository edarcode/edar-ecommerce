import { action } from "../../../utils/action";
import { axiosGet } from "../../../utils/axios";
import { SET_PRODUCTS } from "./const";

export const getAllProducts = (filters) => {
  const { page, name, category } = filters;
  return async (dispatch) => {
    let url = "/products";
    const isPageInFilters = filters.hasOwnProperty("page");
    if (isPageInFilters && name) {
      url = `/products?page=${page}&name=${name}`;
    } else if (isPageInFilters) {
      url = `/products?page=${page}`;
    }
    const allDataProducts = await axiosGet({ url });
    dispatch(action(SET_PRODUCTS, allDataProducts));
  };
};
