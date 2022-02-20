import { SET_NAME } from "./const";

const initialState = {
  name: "",
  category: null,
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
  };
  return (cases[type] && cases[type]()) || state;
};
