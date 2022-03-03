import { action } from "../../../utils/action";
import { axiosGet } from "../../../utils/axios";
import { ADD_TO_CART, SET_CART, SET_CART_PRODUCTS } from "./const";

export const addToCart = (product) => {
  //product debe ser un objeto con key = id del producto y value la cantidad
  return (dispatch) => {
    const cartLocalStorage = localStorage.getItem("cart");
    if (cartLocalStorage) {
      const cart = JSON.parse(cartLocalStorage);
      const newCart = { ...cart, ...product };
      const newLocalStorage = JSON.stringify(newCart);
      localStorage.setItem("cart", newLocalStorage);
    } else {
      const strProduct = JSON.stringify(product);
      localStorage.setItem("cart", strProduct);
    }
    dispatch(action(ADD_TO_CART, product));
  };
};
export const updateCart = ({ id, amount }) => {
  console.log(id, amount);
  return (dispatch) => {
    const cartLocalStorage = localStorage.getItem("cart");
    if (cartLocalStorage) {
      const cart = JSON.parse(cartLocalStorage);
      cart[id] = amount;
      const newLocalStorage = JSON.stringify(cart);
      localStorage.setItem("cart", newLocalStorage);
      dispatch(action(SET_CART, cart));
    }
  };
};
export const getCartProducts = ({ cart }) => {
  const strCart = JSON.stringify(cart);
  return async (dispatch) => {
    const cartProducts = await axiosGet({ url: `/cart?cart=${strCart}` });
    dispatch(action(SET_CART_PRODUCTS, cartProducts));
  };
};
