import { action } from "../../../utils/action";
import { axiosGet } from "../../../utils/axios";
import { SET_PRODUCTS } from "./const";

export const getAllProducts = (filters) => {
  return async (dispatch) => {
    const url = addQuery(filters);
    const allDataProducts = await axiosGet({ url });
    dispatch(action(SET_PRODUCTS, allDataProducts));
  };
};

function addQuery(filters) {
  const { page, name, idCategory, min, max, order } = filters;
  let url = "/products";
  const isPage = filters.hasOwnProperty("page");
  const isMin = filters.hasOwnProperty("min") && min >= 0;
  if (isPage) {
    url += `?page=${page}`;
  }
  if (name) {
    url += `&name=${name}`;
  }
  if (idCategory) {
    url += `&idCategory=${idCategory}`;
  }
  if (isMin) {
    url += `&min=${min}`;
  }
  if (max) {
    url += `&max=${max}`;
  }
  if (order) {
    url += `&order=${order}`;
  }
  return url;
}
