import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../utils/action";
import { InputPasswordSc } from "./style";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useRef } from "react";
import { bgNavbar, isRight, isWrong } from "../../../consts/colors";
import { useIstrue } from "../../hooks/useIstrue";
import { useEffect } from "react";

export default function InputPassword({
  err,
  placeholder,
  nameReducer,
  keyState,
  type,
}) {
  const outlineRight = `2px solid ${isRight}`;
  const outlineWrong = `2px solid ${isWrong}`;
  const style = { outline: (err[keyState] && outlineWrong) || outlineRight };
  const inputPassword = useRef(null);
  const input = useRef(null);
  const { isTrue, setIsTrue } = useIstrue();
  const dispatch = useDispatch();
  const state = useSelector((state) => state[nameReducer]);

  useEffect(() => {
    inputPassword.current.style.outline = "";
  }, []);

  const handleOnChange = (e) => {
    const inputValue = e.target.value;
    type && dispatch(action(type, inputValue));
  };

  const handleOnFocus = () => {
    inputPassword.current.style.outline = `2px solid ${bgNavbar}`;
  };
  const handleOnFocusOut = () => {
    inputPassword.current.style.outline =
      (err[keyState] && outlineWrong) || outlineRight;
  };

  const handleOnClickEye = () => {
    setIsTrue(!isTrue);
  };

  useEffect(() => {
    input.current.type = isTrue ? "text" : "password";
  }, [isTrue]);

  return (
    <InputPasswordSc style={style} ref={inputPassword}>
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
