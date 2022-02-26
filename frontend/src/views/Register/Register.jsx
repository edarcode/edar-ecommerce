import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/common/Button/Button";
import InputPassword from "../../components/common/InputPassword/InputPassword";
import InputText from "../../components/common/InputText/InputText";
import Spinner from "../../components/common/Spinner/Spinner";
import Successfully from "../../components/common/Successfully/Successfully";
import { login } from "../../consts/pathRoutes";
import { createAccount } from "../../redux/reducers/register/actions";
import {
  RESET_STATE_REGISTER,
  SET_RES_REGISTER,
} from "../../redux/reducers/register/const";
import { action } from "../../utils/action";
import { inputPassword, inputText } from "./props";
import { RegisterSc } from "./style";
import { validateRegister } from "./validateRegister";

export default function Register() {
  const dispatch = useDispatch();
  const navegateToLogin = useNavigate();
  const { email, password, resRegister } = useSelector(
    (state) => state.register
  );
  const [err, setErr] = useState(validateRegister({ email, password }));
  const [isSpinner, setIsSpinner] = useState(false);

  useEffect(() => {
    setErr(validateRegister({ email, password }));
  }, [email, password]);

  const handleOnSubmitRegister = (e) => {
    e.preventDefault();
    if (!Object.keys(err).length) {
      dispatch(createAccount({ setIsSpinner, data: { email, password } }));
    }
  };

  const handleOnClickResetRegister = () => {
    if (resRegister.msg === "Esta cuenta ya existe") {
      dispatch(action(SET_RES_REGISTER, {}));
    } else {
      dispatch(action(RESET_STATE_REGISTER));
      navegateToLogin(login);
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
      {isSpinner && <Spinner />}
      {resRegister?.msg && (
        <Successfully
          content={resRegister.msg}
          onClick={handleOnClickResetRegister}
          check={resRegister.msg !== "Esta cuenta ya existe"}
        />
      )}
    </RegisterSc>
  );
}
