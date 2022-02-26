import { isEmail } from "../../utils/form-validations/isEmail";
import { isPassword } from "../../utils/form-validations/isPassword";

export const validateLogin = (dataFormLogin) => {
  const { email, password } = dataFormLogin;
  const errors = {};
  if (!isEmail({ str: email })) {
    errors.email = "*";
  }
  if (!isPassword({ str: password })) {
    errors.password = "*";
  }
  return errors;
};
