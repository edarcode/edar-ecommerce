import { action } from "../../../utils/action";
import { ADD_TO_CART } from "./const";

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
