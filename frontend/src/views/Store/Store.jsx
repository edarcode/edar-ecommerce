import CardsProducts from "../../components/client/CardsProducts/CardsProducts";
import Paged from "../../components/client/Paged/Paged";
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
