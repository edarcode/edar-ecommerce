import {
  SET_NAME,
  SET_ID_CATEGORY,
  SET_MIN,
  SET_MAX,
  SET_ORDER,
} from "./const";

const initialState = {
  name: "",
  idCategory: 0,
  min: 0,
  max: 0,
  order: null,
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
    [SET_MIN]: () => setState("min"),
    [SET_MAX]: () => setState("max"),
    [SET_ORDER]: () => setState("order"),
  };
  return (cases[type] && cases[type]()) || state;
};
