import { action } from "../../../utils/action";
import { axiosGet } from "../../../utils/axios";
import { SET_CATEGORIES } from "./const";

export const getAllCategories = () => {
  return async (dispatch) => {
    const categories = await axiosGet({ url: "/categories" });
    dispatch(action(SET_CATEGORIES, categories));
  };
};
