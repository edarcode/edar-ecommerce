import { action } from "../../../utils/action";
import { axiosGet } from "../../../utils/axios";
import { SET_PRODUCT } from "./const";

export const getDetailProduct = ({ id, setLoading }) => {
  return async (dispatch) => {
    const product = await axiosGet({
      url: `/products/detail/${id}`,
    });
    setLoading(true);
    dispatch(action(SET_PRODUCT, product));
  };
};
