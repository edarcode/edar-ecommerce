import { SET_EMAIL, SET_PASSWORD, SET_IS_LOGIN, CLEAN_LOGIN } from "./const";

const initialState = {
  email: "",
  password: "",
  isLogin: null,
};

export const login = (state = initialState, { type, payload }) => {
  const setState = (name) => {
    if (name) return { ...state, [name]: payload };
    return initialState;
  };
  const cases = {
    [SET_EMAIL]: () => setState("email"),
    [SET_PASSWORD]: () => setState("password"),
    [SET_IS_LOGIN]: () => setState("isLogin"),
    [CLEAN_LOGIN]: () => setState(),
  };
  return (cases[type] && cases[type]()) || state;
};
