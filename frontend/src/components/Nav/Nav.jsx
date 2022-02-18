import Li from "../common/Li/Li";
import { NavSc } from "./style";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineLogin /* ,AiOutlineLogout */ } from "react-icons/ai";

export default function Nav({ className }) {
  return (
    <NavSc className={className}>
      <ul>
        <Li to={"/"} text={"Inicio"} />
        <Li to={"/store"} text={"Tienda"} />
        <Li to={"/catalogue"} text={"Lista de partes"} />
        <Li to={"/contact"} text={"Contacto"} />
        <Li to={"/login"} text={<AiOutlineLogin />} />
        <Li to={"/cart"} text={<CgShoppingCart />} />
      </ul>
    </NavSc>
  );
}