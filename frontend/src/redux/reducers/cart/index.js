import { ADD_TO_CART } from "./const";

const initialState = {
  cart: {},
};

export const cart = (state = initialState, { type, payload }) => {
  /* const setState = (name) => {
    if (name) return { ...state, [name]: payload };
    return initialState;
  }; */
  const pushState = (name) => {
    if (name) return { ...state, [name]: { ...state[name], ...payload } };
  };
  const cases = {
    [ADD_TO_CART]: () => pushState("cart"),
  };
  return (cases[type] && cases[type]()) || state;
};
