import { Button } from "../../components/common/Button/Button";
import InputPassword from "../../components/common/InputPassword/InputPassword";
import InputText from "../../components/common/InputText/InputText";
import { inputText, inputPassword } from "./props";
import { LoginSc } from "./style";
import { Link } from "react-router-dom";
import gmail from "../../assets/gmail.svg";
import { register } from "../../consts/pathRoutes";

export default function Login() {
  return (
    <LoginSc>
      <form className="form-login">
        <InputText {...inputText} err={{}} />
        <InputPassword {...inputPassword} err={{}} />
        <Link to={"/"} className="forget-password">
          ¿Olvidó su password?
        </Link>
        <Button>Iniciar sesión</Button>
        <span className="login-gmail">
          ¿Prefiere iniciar sesión con
          <img className="logo-gmail" src={gmail} alt="logo gmail" />?
        </span>
        <span className="form-login__register">
          ¿No tiene cuenta? <Link to={register}>Registrarse</Link>
        </span>
      </form>
    </LoginSc>
  );
}
