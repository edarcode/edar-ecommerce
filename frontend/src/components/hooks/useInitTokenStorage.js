import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SET_EMAIL, SET_TOKEN } from "../../redux/reducers/storage/const";
import { action } from "../../utils/action";
import { isTokenAuthorized } from "../../utils/isTokenAuthorized";

export const useInitTokenStorage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const initStorage = async () => {
      const isAuthorized = await isTokenAuthorized();
      if (isAuthorized) {
        const email = localStorage.getItem("email");
        const token = localStorage.getItem("token");
        dispatch(action(SET_EMAIL, email));
        dispatch(action(SET_TOKEN, token));
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
      }
    };
    initStorage();
  }, [dispatch]);
};
