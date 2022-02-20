import Li from "../common/Li/Li";
import { NavSc } from "./style";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineLogin /* ,AiOutlineLogout */ } from "react-icons/ai";

export default function Nav({ className, setIsTrue }) {
  return (
    <NavSc className={className}>
      <ul>
        <Li to={"/"} text={"Inicio"} onClick={() => setIsTrue(false)} />
        <Li to={"/store"} text={"Tienda"} onClick={() => setIsTrue(false)} />
        <Li
          to={"/catalogue"}
          text={"Lista de partes"}
          onClick={() => setIsTrue(false)}
        />
        <Li
          to={"/contact"}
          text={"Contacto"}
          onClick={() => setIsTrue(false)}
        />
        <Li
          to={"/login"}
          text={<AiOutlineLogin />}
          onClick={() => setIsTrue(false)}
        />
        <Li
          to={"/cart"}
          text={<CgShoppingCart />}
          onClick={() => setIsTrue(false)}
        />
      </ul>
    </NavSc>
  );
}
