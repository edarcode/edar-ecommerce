import { action } from "../../../utils/action";
import { axiosGet } from "../../../utils/axios";
import { SET_PRODUCTS } from "./const";

export const getAllProducts = (filters) => {
  const { page, name, idCategory, min, max } = filters;
  return async (dispatch) => {
    let url = "/products";
    const isPage = filters.hasOwnProperty("page");
    const isMin = filters.hasOwnProperty("min") && min >= 0;

    if (isPage && name && idCategory && isMin && max) {
      url = `/products?page=${page}&name=${name}&idCategory=${idCategory}&min=${min}&max=${max}`;
    } else if (isPage && name && idCategory) {
      url = `/products?page=${page}&name=${name}&idCategory=${idCategory}`;
    } else if (isPage && name && isMin && max) {
      url = `/products?page=${page}&name=${name}&min=${min}&max=${max}`;
    } else if (isPage && idCategory && isMin && max) {
      url = `/products?page=${page}&idCategory=${idCategory}&min=${min}&max=${max}`;
    } else if (isPage && name) {
      url = `/products?page=${page}&name=${name}`;
    } else if (isPage && idCategory) {
      url = `/products?page=${page}&idCategory=${idCategory}`;
    } else if (isPage && isMin && max) {
      url = `/products?page=${page}&min=${min}&max=${max}`;
    } else if (isPage) {
      url = `/products?page=${page}`;
    }
    const allDataProducts = await axiosGet({ url });
    dispatch(action(SET_PRODUCTS, allDataProducts));
  };
};
