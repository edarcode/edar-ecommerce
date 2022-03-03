export const setCartLocalStorage = (cart) => {
  const strCart = JSON.stringify(cart);
  localStorage.setItem("cart", strCart);
};
