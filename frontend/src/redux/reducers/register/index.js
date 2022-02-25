import {
  RESET_STATE_REGISTER,
  SET_EMAIL,
  SET_PASSWORD,
  SET_RES_REGISTER,
} from "./const";

const initialState = {
  email: "",
  password: "",
  resRegister: {},
};

export const register = (state = initialState, { type, payload }) => {
  const setState = (name) => {
    if (name) return { ...state, [name]: payload };
    return initialState;
  };
  const cases = {
    [SET_EMAIL]: () => setState("email"),
    [SET_PASSWORD]: () => setState("password"),
    [SET_RES_REGISTER]: () => setState("resRegister"),
    [RESET_STATE_REGISTER]: () => setState(),
  };
  return (cases[type] && cases[type]()) || state;
};
