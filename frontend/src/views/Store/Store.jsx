import CardsProducts from "../../components/CardsProducts/CardsProducts";
import Paged from "../../components/Paged/Paged";
import FilterProduct from "../../components/client/FilterProduct/FilterProduct";
import { StoreSc } from "./style";

export default function Store() {
  return (
    <StoreSc>
      <FilterProduct />
      <CardsProducts />
      <Paged />
    </StoreSc>
  );
}
