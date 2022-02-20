import { action } from "../../../utils/action";
import { axiosGet } from "../../../utils/axios";
import { SET_PRODUCTS } from "./const";

export const getAllProducts = (filtros) => {
  const { page, name } = filtros;
  console.log(filtros);
  return async (dispatch) => {
    let url = "/products";
    const isPageInFiltros = filtros.hasOwnProperty(page);
    console.log(isPageInFiltros);
    if (isPageInFiltros && name) {
      url = `/products?page=${page}&name=${name}`;
    } else if (isPageInFiltros) {
      url = `/products?page=${page}`;
    }
    const allDataProducts = await axiosGet({ url });
    dispatch(action(SET_PRODUCTS, allDataProducts));
  };
};
