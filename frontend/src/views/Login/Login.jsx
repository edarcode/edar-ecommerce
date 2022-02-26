import { Button } from "../../components/common/Button/Button";
import InputPassword from "../../components/common/InputPassword/InputPassword";
import InputText from "../../components/common/InputText/InputText";
import { inputText, inputPassword } from "./props";
import { LoginSc } from "./style";
import { Link, useNavigate } from "react-router-dom";
import gmail from "../../assets/gmail.svg";
import { home, register } from "../../consts/pathRoutes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { validateLogin } from "./validateLogin";
import { getToken } from "../../redux/reducers/login/actions";
import Successfully from "../../components/common/Successfully/Successfully";
import { action } from "../../utils/action";
import { CLEAN_LOGIN, SET_IS_LOGIN } from "../../redux/reducers/login/const";

export default function Login() {
  const dispatch = useDispatch();
  const navigateToHome = useNavigate();
  const { email, password, isLogin } = useSelector((state) => state.login);
  const [err, setErr] = useState(validateLogin({ email, password }));

  useEffect(() => {
    setErr(validateLogin({ email, password }));
  }, [email, password]);

  useEffect(() => {
    isLogin && dispatch(action(CLEAN_LOGIN));
    isLogin && navigateToHome(home);
  }, [isLogin, navigateToHome, dispatch]);

  const handleOnSubmitLogin = (e) => {
    e.preventDefault();
    if (!Object.keys(err).length) {
      dispatch(getToken({ data: { email, password } }));
    }
  };

  const handleOnClickSuccessfully = (e) => {
    dispatch(action(SET_IS_LOGIN, null));
  };

  return (
    <LoginSc>
      <form className="form-login" onSubmit={handleOnSubmitLogin}>
        <InputText {...inputText} err={err} />
        <InputPassword {...inputPassword} err={err} />
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
      {(isLogin === false && (
        <Successfully
          content={"Email o password incorrectos"}
          onClick={handleOnClickSuccessfully}
        />
      )) ||
        null}
    </LoginSc>
  );
}
