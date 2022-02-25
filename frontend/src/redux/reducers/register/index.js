import { SET_EMAIL, SET_PASSWORD, SET_RES_REGISTRO } from "./const";

const initialState = {
  email: "",
  password: "",
  resRegistro: {},
};

export const register = (state = initialState, { type, payload }) => {
  const setState = (name) => {
    if (name) return { ...state, [name]: payload };
    return payload;
  };
  const cases = {
    [SET_EMAIL]: () => setState("email"),
    [SET_PASSWORD]: () => setState("password"),
    [SET_RES_REGISTRO]: () => setState("resRegistro"),
  };
  return (cases[type] && cases[type]()) || state;
};
