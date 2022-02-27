import {
  CLEAN_RESET_PASSWORD,
  SET_EMAIL,
  SET_PASSWORD,
  SET_RES_UPDATE_PASSWORD,
} from "./const";

const initialState = {
  email: "",
  password: "",
  resUpdatePassword: {},
};

export const resetPassword = (state = initialState, { type, payload }) => {
  const setState = (name) => {
    if (name) return { ...state, [name]: payload };
    return initialState;
  };
  const cases = {
    [SET_EMAIL]: () => setState("email"),
    [SET_PASSWORD]: () => setState("password"),
    [SET_RES_UPDATE_PASSWORD]: () => setState("resUpdatePassword"),
    [CLEAN_RESET_PASSWORD]: () => setState(),
  };
  return (cases[type] && cases[type]()) || state;
};
