import { action } from "../../../utils/action";
import { axiosGet } from "../../../utils/axios";
import { SET_PRODUCTS } from "./const";

export const getAllProducts = (filters) => {
  const { page, name, idCategory } = filters;
  return async (dispatch) => {
    let url = "/products";
    const isPage = filters.hasOwnProperty("page");

    if (isPage && name && idCategory) {
      url = `/products?page=${page}&name=${name}&idCategory=${idCategory}`;
    } else if (isPage && name) {
      url = `/products?page=${page}&name=${name}`;
    } else if (isPage && idCategory) {
      url = `/products?page=${page}&idCategory=${idCategory}`;
    } else if (isPage) {
      url = `/products?page=${page}`;
    }
    const allDataProducts = await axiosGet({ url });
    dispatch(action(SET_PRODUCTS, allDataProducts));
  };
};
