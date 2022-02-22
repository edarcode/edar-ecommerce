import CardsProducts from "../../components/client/CardsProducts/CardsProducts";
import Paged from "../../components/client/Paged/Paged";
import FilterProduct from "../../components/client/FilterProduct/FilterProduct";
import { StoreSc } from "./style";
import SearchByName from "../../components/client/SearchByName/SearchByName";

export default function Store() {
  return (
    <StoreSc>
      <SearchByName className={"searchByName"} />
      <FilterProduct className={"filterProduct"} />
      <CardsProducts className={"cardsProducts"} />
      <Paged className={"paged"} />
    </StoreSc>
  );
}
