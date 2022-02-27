import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/common/Button/Button";
import InputPassword from "../../components/common/InputPassword/InputPassword";
import { inputPassword } from "./props";
import { ResetPasswordSc } from "./style";
import { validatePassword } from "./validatePassword";
import { useNavigate, useParams } from "react-router-dom";
import {
  cleanResetPassword,
  updatePassword,
} from "../../redux/reducers/resetPassword/actions";
import Alert from "../../components/pop-ups/Alert/Alert";
import { login } from "../../consts/pathRoutes";

export default function ResetPassword() {
  const navigateToLogin = useNavigate();
  const { token } = useParams();
  const dispatch = useDispatch();
  const { password, resUpdatePassword } = useSelector(
    (state) => state.resetPassword
  );
  const [err, setErr] = useState({ password });

  useEffect(() => {
    setErr(validatePassword({ password }));
  }, [password]);

  const handleOnSubmitResetPassword = (e) => {
    e.preventDefault();
    if (!Object.keys(err).length) {
      dispatch(updatePassword({ token, password }));
    }
  };

  const handleOnClickClean = () => {
    dispatch(cleanResetPassword());
    navigateToLogin(login);
  };

  return (
    <ResetPasswordSc>
      <form onSubmit={handleOnSubmitResetPassword}>
        <InputPassword err={err} {...inputPassword} />
        <Button>Guardar</Button>
      </form>
      {resUpdatePassword.msg && (
        <Alert msg={resUpdatePassword.msg} onClick={handleOnClickClean} />
      )}
    </ResetPasswordSc>
  );
}
