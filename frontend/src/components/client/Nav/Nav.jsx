import Li from "../../common/Li/Li";
import { NavSc } from "./style";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineLogin } from "react-icons/ai";
import { useSelector } from "react-redux";
import {
  cart,
  catalogue,
  contact,
  home,
  login,
  profile,
  store,
} from "../../../consts/pathRoutes";

export default function Nav({ className, setIsTrue }) {
  const { email } = useSelector((state) => state.storage);
  return (
    <NavSc className={className}>
      <ul>
        <Li to={home} text={"Inicio"} onClick={() => setIsTrue(false)} />
        <Li to={store} text={"Tienda"} onClick={() => setIsTrue(false)} />
        <Li
          to={catalogue}
          text={"Lista de partes"}
          onClick={() => setIsTrue(false)}
        />
        <Li to={contact} text={"Contacto"} onClick={() => setIsTrue(false)} />
        <Li
          to={(email && profile) || login}
          text={(email && email) || <AiOutlineLogin />}
          onClick={() => setIsTrue(false)}
        />
        <Li
          to={cart}
          text={<CgShoppingCart />}
          onClick={() => setIsTrue(false)}
        />
      </ul>
    </NavSc>
  );
}
