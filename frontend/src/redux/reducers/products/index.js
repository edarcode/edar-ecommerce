import { SET_PRODUCTS } from "./const";

const initialState = {
  /* products: [],
  page: null,
  productsPerPage: null,
  pageCount: null,
  productsCount: null, */
};

export const products = (state = initialState, { type, payload }) => {
  const setState = (name) => {
    if (name) return { ...state, [name]: payload };
    return payload;
  };
  const cases = {
    [SET_PRODUCTS]: () => setState(),
  };
  return (cases[type] && cases[type]()) || state;
};
