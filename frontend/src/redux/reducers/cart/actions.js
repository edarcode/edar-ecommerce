import { action } from "../../../utils/action";
import { axiosGet, axiosPost } from "../../../utils/axios";
import {
  ADD_TO_CART,
  DELETE_CART,
  SET_CART_PRODUCTS,
  SET_RES_BUY_CART,
  UPDATE_CART,
} from "./const";

export const addToCart = (product) => {
  //product debe ser un objeto con key = id del producto y value la cantidad
  return (dispatch) => {
    dispatch(action(ADD_TO_CART, product));
  };
};
export const updateCart = (product) => {
  return (dispatch) => {
    dispatch(action(UPDATE_CART, product));
  };
};
export const deleteCart = ({ id }) => {
  return (dispatch) => {
    dispatch(action(DELETE_CART, id));
  };
};
export const getCartProducts = ({ cart }) => {
  const strCart = JSON.stringify(cart);
  return async (dispatch) => {
    const cartProducts = await axiosGet({ url: `/cart?cart=${strCart}` });
    dispatch(action(SET_CART_PRODUCTS, cartProducts));
  };
};
export const buyCart = ({
  address,
  tell,
  details,
  paymentMethod,
  setIsLoading,
}) => {
  return async (dispatch) => {
    const resBuyCart = await axiosPost({
      url: "bills",
      data: { address, tell, details, paymentMethod },
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    setIsLoading(false);
    dispatch(action(SET_RES_BUY_CART, resBuyCart));
  };
};
