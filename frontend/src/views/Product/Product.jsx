import { useEffect } from "react";
import { ProductSc } from "./style";
import { useDispatch } from "react-redux";
import { getDetailProduct } from "../../redux/reducers/product/actions";
import { useParams } from "react-router-dom";

export default function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getDetailProduct({ id }));
  }, [dispatch, id]);
  return <ProductSc>detail product</ProductSc>;
}
