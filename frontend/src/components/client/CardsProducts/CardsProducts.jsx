import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../redux/reducers/products/actions";
import { useDebounce } from "../../hooks/useDebounce";
import CardProduct from "../CardProduct/CardProduct";
import { CardsProductsSc } from "./style";

export default function CardsProducts({ className }) {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { name, idCategory, min, max } = useSelector(
    (state) => state.filterOrderProducts
  );
  const debouncedMin = useDebounce(min, 400);
  const debouncedMax = useDebounce(max, 400);
  const debouncedName = useDebounce(name, 250);

  useEffect(() => {
    dispatch(getAllProducts({ page: 0 }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      getAllProducts({
        page: 0,
        name: debouncedName,
        idCategory,
        min: debouncedMin,
        max: debouncedMax,
      })
    );
  }, [dispatch, debouncedName, idCategory, debouncedMin, debouncedMax]);

  if (!products.length) return <span>Not found</span>;
  return (
    <CardsProductsSc className={className}>
      {products.map((item) => (
        <CardProduct key={item.id} {...item} />
      ))}
    </CardsProductsSc>
  );
}
