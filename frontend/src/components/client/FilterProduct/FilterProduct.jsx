import SearchByCategory from "../SearchByCategory/SearchByCategory";
import SearchByPrice from "../SearchByPrice/SearchByPrice";
import { FilterProductSc } from "./style";

export default function FilterProduct() {
  return (
    <FilterProductSc>
      <SearchByCategory />
      <SearchByPrice />
    </FilterProductSc>
  );
}
