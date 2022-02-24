import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../utils/action";
import { InputPasswordSc } from "./style";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useRef } from "react";
import { bgNavbar } from "../../../consts/colors";
import { useIstrue } from "../../hooks/useIstrue";
import { useEffect } from "react";

export default function InputPassword({
  placeholder,
  nameReducer,
  keyState,
  type,
}) {
  const inputPassword = useRef(null);
  const input = useRef(null);
  const { isTrue, setIsTrue } = useIstrue();
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

  const handleOnClickEye = () => {
    setIsTrue(!isTrue);
  };

  useEffect(() => {
    input.current.type = isTrue ? "text" : "password";
  }, [isTrue]);

  return (
    <InputPasswordSc ref={inputPassword}>
      <input
        ref={input}
        type="password"
        placeholder={placeholder}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnFocusOut}
        value={keyState && state[keyState]}
      />
      <BsEye
        className={isTrue ? "eye--on" : "eye-off"}
        onClick={handleOnClickEye}
      />
      <BsEyeSlash
        className={!isTrue ? "eye--on" : "eye-off"}
        onClick={handleOnClickEye}
      />
    </InputPasswordSc>
  );
}
