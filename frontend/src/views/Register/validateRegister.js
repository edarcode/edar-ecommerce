import { isEmail } from "../../utils/form-validations/isEmail";
import { isPassword } from "../../utils/form-validations/isPassword";

export const validateRegister = (dataFormRegister) => {
  const { email, password } = dataFormRegister;
  const errors = {};
  if (!isEmail({ str: email })) {
    errors.email = "*";
  }
  if (!isPassword({ str: password })) {
    errors.password = "*";
  }
  return errors;
};
