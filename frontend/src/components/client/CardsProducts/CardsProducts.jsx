import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../redux/reducers/products/actions";
import CardProduct from "../CardProduct/CardProduct";
import { CardsProductsSc } from "./style";

export default function CardsProducts() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { name } = useSelector((state) => state.filterOrderProducts);

  useEffect(() => {
    dispatch(getAllProducts({ page: 0 }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllProducts({ page: 0, name }));
  }, [dispatch, name]);

  return (
    <CardsProductsSc>
      {products &&
        products.map((item) => <CardProduct key={item.id} {...item} />)}
    </CardsProductsSc>
  );
}