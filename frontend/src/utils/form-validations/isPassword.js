import { specialChars } from "../../consts/specialChars";

export const isPassword = ({ str }) => {
  const arrStr = str.split("");
  const isEmpty = str !== "";
  const isGreaterThanEight = str.length >= 8;
  const isThereAnyUppercase = arrStr.some((item) => {
    if (specialChars.includes(item) || item === " ") return false;
    return item === item.toUpperCase();
  });
  const isThereAnySpace = arrStr.some((item) => item === " ");
  const isThereAnySpecialChars = arrStr.some((item) =>
    specialChars.includes(item)
  );

  if (!isEmpty) {
    return false;
  }
  if (!isGreaterThanEight) {
    return false;
  }
  if (!isThereAnyUppercase) {
    return false;
  }
  if (!isThereAnySpace) {
    return false;
  }
  if (!isThereAnySpecialChars) {
    return false;
  }
  return true;
};
