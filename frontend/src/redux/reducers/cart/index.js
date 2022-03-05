import { setCartLocalStorage } from "../../../utils/setCartLocalStorage";
import {
  ADD_TO_CART,
  DELETE_CART,
  SET_ADDRESS,
  SET_CART,
  SET_CART_PRODUCTS,
  SET_RES_BUY_CART,
  SET_TELL,
  UPDATE_CART,
} from "./const";

const initialState = {
  cart: {},
  cartProducts: [],
  address: "",
  tell: "",
  resBuyCart: {},
};

export const cart = (state = initialState, { type, payload }) => {
  const setState = (name) => {
    if (name) return { ...state, [name]: payload };
    return initialState;
  };
  const cases = {
    [ADD_TO_CART]: () => {
      const newCart = { ...state, cart: { ...state.cart, ...payload } };
      setCartLocalStorage(newCart.cart);
      return newCart;
    },
    [UPDATE_CART]: () => {
      const { id, amount } = payload;
      const newCart = { ...state, cart: { ...state.cart, [id]: amount } };
      setCartLocalStorage(newCart.cart);
      return newCart;
    },
    [DELETE_CART]: () => {
      const newCart = {};
      for (const key in state.cart) {
        if (Object.hasOwnProperty.call(state.cart, key)) {
          const value = state.cart[key];
          if (parseInt(key) !== payload) newCart[key] = value;
        }
      }
      setCartLocalStorage(newCart);
      return { ...state, cart: newCart };
    },
    [SET_CART_PRODUCTS]: () => setState("cartProducts"),
    [SET_CART]: () => setState("cart"),
    [SET_ADDRESS]: () => setState("address"),
    [SET_TELL]: () => setState("tell"),
    [SET_RES_BUY_CART]: () => setState("resBuyCart"),
  };
  return (cases[type] && cases[type]()) || state;
};
