import { SET_EMAIL, SET_PASSWORD } from "./const";

const initialState = {
  email: "",
  password: "",
};

export const login = (state = initialState, { type, payload }) => {
  const setState = (name) => {
    if (name) return { ...state, [name]: payload };
    return payload;
  };
  const cases = {
    [SET_EMAIL]: () => setState("email"),
    [SET_PASSWORD]: () => setState("password"),
  };
  return (cases[type] && cases[type]()) || state;
};
