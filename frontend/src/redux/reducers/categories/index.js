import { SET_CATEGORIES } from "./const";

const initialState = {
  categories: [],
};

export const categories = (state = initialState, { type, payload }) => {
  const setState = (name) => {
    if (name) return { ...state, [name]: payload };
    return payload;
  };
  const cases = {
    [SET_CATEGORIES]: () => setState("categories"),
  };
  return (cases[type] && cases[type]()) || state;
};
