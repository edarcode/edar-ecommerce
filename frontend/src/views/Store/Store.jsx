import CardsProducts from "../../components/CardsProducts/CardsProducts";
import Paged from "../../components/Paged/Paged";
import { StoreSc } from "./style";

export default function Store() {
  return (
    <StoreSc>
      <CardsProducts />
      <Paged />
    </StoreSc>
  );
}
