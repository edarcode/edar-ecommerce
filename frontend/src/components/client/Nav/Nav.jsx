import { AiOutlineLogin } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { useSelector } from "react-redux";
import {
  account,
  cart,
  contact,
  home,
  login,
  store,
} from "../../../consts/pathRoutes";
import Li from "../../common/Li/Li";
import { NavSc } from "./style";

export default function Nav({ className, setIsTrue }) {
  const { email } = useSelector((state) => state.storage);
  return (
    <NavSc className={className}>
      <ul>
        <Li to={home} text={"Inicio"} onClick={() => setIsTrue(false)} />
        <Li to={store} text={"Tienda"} onClick={() => setIsTrue(false)} />
        <Li to={contact} text={"Contacto"} onClick={() => setIsTrue(false)} />
        <Li
          to={(email && account) || login}
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
