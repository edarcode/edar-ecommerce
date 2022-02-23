import { Button } from "../../components/common/Button/Button";
import InputPassword from "../../components/common/InputPassword/InputPassword";
import InputText from "../../components/common/InputText/InputText";
import { inputText, inputPassword } from "./props";
import { LoginSc } from "./style";

export default function Login() {
  return (
    <LoginSc>
      <form>
        <InputText {...inputText} />
        <InputPassword {...inputPassword} />
        <span>¿Olvidaste tu password?</span>
        <br />
        <span>¿No tiene cuenta? Registrate</span>
        <Button>Iniciar sesión</Button>
      </form>
    </LoginSc>
  );
}
