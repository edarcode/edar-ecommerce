import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../utils/action";
import { InputPasswordSc } from "./style";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useRef } from "react";
import { bgNavbar } from "../../../consts/colors";

export default function InputPassword({
  placeholder,
  nameReducer,
  keyState,
  type,
}) {
  const inputPassword = useRef(null);
  const dispatch = useDispatch();
  const state = useSelector((state) => state[nameReducer]);

  const handleOnChange = (e) => {
    const inputValue = e.target.value;
    type && dispatch(action(type, inputValue));
  };

  const handleOnFocus = () => {
    inputPassword.current.style.outline = `2px solid ${bgNavbar}`;
  };
  const handleOnFocusOut = () => {
    inputPassword.current.style.outline = "";
  };

  return (
    <InputPasswordSc ref={inputPassword}>
      <input
        type="password"
        placeholder={placeholder}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnFocusOut}
        value={keyState && state[keyState]}
      />
      <BsEyeSlash />
      <BsEye className="eye-off" />
    </InputPasswordSc>
  );
}
