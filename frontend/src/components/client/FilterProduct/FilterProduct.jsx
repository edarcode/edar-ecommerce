import OrderProducts from "../OrderProducts/OrderProducts";
import SearchByCategory from "../SearchByCategory/SearchByCategory";
import SearchByPrice from "../SearchByPrice/SearchByPrice";
import { FilterProductSc } from "./style";

export default function FilterProduct({ className }) {
  return (
    <FilterProductSc className={className}>
      <SearchByCategory />
      <SearchByPrice />
      <OrderProducts />
    </FilterProductSc>
  );
}
