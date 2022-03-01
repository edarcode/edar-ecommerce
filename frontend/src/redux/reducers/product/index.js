import { SET_PRODUCT } from "./const";

const initialState = {
  product: {},
};

export const product = (state = initialState, { type, payload }) => {
  const setState = (name) => {
    if (name) return { ...state, [name]: payload };
    return initialState;
  };
  const cases = {
    [SET_PRODUCT]: () => setState("product"),
  };
  return (cases[type] && cases[type]()) || state;
};
