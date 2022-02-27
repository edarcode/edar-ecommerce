import { isPassword } from "../../utils/form-validations/isPassword";

export const validatePassword = (dataFormResetPassword) => {
  const { password } = dataFormResetPassword;
  const errors = {};
  if (!isPassword({ str: password })) {
    errors.password = "*";
  }
  return errors;
};
