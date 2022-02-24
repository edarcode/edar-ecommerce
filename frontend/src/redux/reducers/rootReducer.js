import { combineReducers } from "redux";
import { products } from "./products";
import { filterOrderProducts } from "./filterOrderProducts";
import { categories } from "./categories";
import { login } from "./login";
import { register } from "./register";

export const rootReducer = combineReducers({
  products,
  filterOrderProducts,
  categories,
  login,
  register,
});
