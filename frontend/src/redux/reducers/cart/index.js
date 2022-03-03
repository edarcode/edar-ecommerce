import { ADD_TO_CART, SET_CART, SET_CART_PRODUCTS } from "./const";

const initialState = {
  cart: {},
  cartProducts: [],
};

export const cart = (state = initialState, { type, payload }) => {
  const setState = (name) => {
    if (name) return { ...state, [name]: payload };
    return initialState;
  };
  const pushState = (name) => {
    if (name) return { ...state, [name]: { ...state[name], ...payload } };
  };
  const cases = {
    [ADD_TO_CART]: () => pushState("cart"),
    [SET_CART_PRODUCTS]: () => setState("cartProducts"),
    [SET_CART]: () => setState("cart"),
  };
  return (cases[type] && cases[type]()) || state;
};
