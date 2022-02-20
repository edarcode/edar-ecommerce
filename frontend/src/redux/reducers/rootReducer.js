import { combineReducers } from "redux";
import { products } from "./products";
import { filterOrderProducts } from "./filterOrderProducts";

export const rootReducer = combineReducers({ products, filterOrderProducts });
