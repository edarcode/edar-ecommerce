import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SET_CART } from "../../redux/reducers/cart/const";
import { action } from "../../utils/action";

export const useInitCartStorage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const cart = localStorage.getItem("cart");
      if (cart) {
        const objCart = JSON.parse(cart);
        dispatch(action(SET_CART, objCart));
      }
    })();
  }, [dispatch]);
};
