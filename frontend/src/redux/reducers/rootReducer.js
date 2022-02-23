import { combineReducers } from "redux";
import { products } from "./products";
import { filterOrderProducts } from "./filterOrderProducts";
import { categories } from "./categories";
import { login } from "./login";

export const rootReducer = combineReducers({
  products,
  filterOrderProducts,
  categories,
  login,
});
