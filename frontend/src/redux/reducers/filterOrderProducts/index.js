import { SET_NAME, SET_ID_CATEGORY } from "./const";

const initialState = {
  name: "",
  idCategory: null,
  order: [],
  min: null,
  max: null,
};

export const filterOrderProducts = (
  state = initialState,
  { type, payload }
) => {
  const setState = (name) => {
    if (name) return { ...state, [name]: payload };
    return payload;
  };
  const cases = {
    [SET_NAME]: () => setState("name"),
    [SET_ID_CATEGORY]: () => setState("idCategory"),
  };
  return (cases[type] && cases[type]()) || state;
};
