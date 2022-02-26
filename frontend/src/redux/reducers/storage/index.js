import { SET_TOKEN, SET_EMAIL } from "./const";

const initialState = {
  email: null,
  token: null,
};

export const storage = (state = initialState, { type, payload }) => {
  const setState = (name) => {
    if (name) return { ...state, [name]: payload };
    return initialState;
  };
  const cases = {
    [SET_TOKEN]: () => setState("token"),
    [SET_EMAIL]: () => setState("email"),
  };
  return (cases[type] && cases[type]()) || state;
};
