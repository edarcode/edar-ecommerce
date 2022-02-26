export const logout = () => {
  return async (dispatch) => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    dispatch(action(SET_EMAIL, null));
    dispatch(action(SET_TOKEN, null));
  };
};
