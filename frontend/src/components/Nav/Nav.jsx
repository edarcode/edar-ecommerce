import Li from "../common/Li/Li";
import { NavSc } from "./style";
import { CgShoppingCart } from "react-icons/cg";

export default function Nav() {
  return (
    <NavSc>
      <ul>
        <Li to={"/"} text={"Inicio"} />
        <Li to={"/store"} text={"Tienda"} />
        <Li to={"/catalogue"} text={"Lista de partes"} />
        <Li to={"/contact"} text={"Contacto"} />
        <Li to={"/cart"} text={<CgShoppingCart />} />
        <Li to={"/login"} text={"Login"} />
      </ul>
    </NavSc>
  );
}
