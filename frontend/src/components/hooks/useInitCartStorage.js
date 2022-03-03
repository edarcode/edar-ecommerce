import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartProducts } from "../../redux/reducers/cart/actions";
import { SET_CART } from "../../redux/reducers/cart/const";
import { action } from "../../utils/action";

export const useInitCartStorage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const objCart = JSON.parse(cart);
      dispatch(action(SET_CART, objCart));
    }
  }, [dispatch]);
  useEffect(() => {
    dispatch(getCartProducts({ cart }));
  }, [dispatch, cart]);
};
