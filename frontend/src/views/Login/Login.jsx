import { Button } from "../../components/common/Button/Button";
import InputPassword from "../../components/common/InputPassword/InputPassword";
import InputText from "../../components/common/InputText/InputText";
import { inputText, inputPassword } from "./props";
import { LoginSc } from "./style";
import { Link } from "react-router-dom";
import gmail from "../../assets/gmail.svg";

export default function Login() {
  return (
    <LoginSc>
      <form className="form-login">
        <InputText {...inputText} />
        <InputPassword {...inputPassword} />
        <Link to={"/"} className="forget-password">
          ¿Olvidó su password?
        </Link>
        <Button type="button">Iniciar sesión</Button>
        <span className="login-gmail">
          ¿Prefiere iniciar con
          <img className="logo-gmail" src={gmail} alt="logo gmail" />?
        </span>
        <span className="form-login__register">
          ¿No tiene cuenta? <Link to="/">Registrarse</Link>
        </span>
      </form>
    </LoginSc>
  );
}
