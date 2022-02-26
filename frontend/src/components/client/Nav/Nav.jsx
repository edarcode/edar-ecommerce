import Li from "../../common/Li/Li";
import { NavSc } from "./style";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { /*  useDispatch, */ useSelector } from "react-redux";
import {
  cart,
  catalogue,
  contact,
  home,
  login,
  store,
} from "../../../consts/pathRoutes";
//import { logout } from "../../../redux/reducers/storage/actions";

export default function Nav({ className, setIsTrue }) {
  //const dispatch= useDispatch();
  const { email } = useSelector((state) => state.storage);

  /* const handleOnClickLogout=(e)=>{    
    dispatch(logout())    
  } */

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
          to={login}
          text={(email && <AiOutlineLogout />) || <AiOutlineLogin />}
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
