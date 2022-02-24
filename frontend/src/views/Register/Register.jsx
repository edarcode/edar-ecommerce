import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../../components/common/Button/Button";
import InputPassword from "../../components/common/InputPassword/InputPassword";
import InputText from "../../components/common/InputText/InputText";
import { login } from "../../consts/pathRoutes";
import { inputPassword, inputText } from "./props";
import { RegisterSc } from "./style";
import { validateRegister } from "./validateRegister";

export default function Register() {
  const { email, password } = useSelector((state) => state.register);
  const [err, setErr] = useState(validateRegister({ email, password }));

  useEffect(() => {
    setErr(validateRegister({ email, password }));
  }, [email, password]);

  const handleOnSubmitRegister = (e) => {
    e.preventDefault();
    if (!Object.keys(err).length) {
      console.log("registrarse");
    }
  };

  return (
    <RegisterSc>
      <form onSubmit={handleOnSubmitRegister}>
        <InputText err={err} {...inputText} />
        <InputPassword err={err} {...inputPassword} />
        <span className="require">
          Mínimo 8 caracteres y al menos 1 mayuscula, 1 espacio, 1 caracter
          especial, y sobre todo fácil de recordar.
        </span>
        <Button>Registrarse</Button>
        <Link className="go-login" to={login}>
          Ir a Login
        </Link>
      </form>
    </RegisterSc>
  );
}
