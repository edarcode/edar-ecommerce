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
  const input = useRef(null);
  const { isTrue, setIsTrue } = useIstrue();
  const dispatch = useDispatch();
  const state = useSelector((state) => state[nameReducer]);

  const handleOnChange = (e) => {
    const inputValue = e.target.value;
    type && dispatch(action(type, inputValue));
  };

  const handleOnClickEye = () => {
    setIsTrue(!isTrue);
  };

  useEffect(() => {
    input.current.type = isTrue ? "text" : "password";
  }, [isTrue]);

  return (
    <InputPasswordSc err={err.password}>
      <input
        ref={input}
        type="password"
        placeholder={placeholder}
        onChange={handleOnChange}
        value={keyState && state[keyState]}
      />
      <BsEye
        className={isTrue ? "eye-on" : "eye-off"}
        onClick={handleOnClickEye}
      />
      <BsEyeSlash
        className={!isTrue ? "eye-on" : "eye-off"}
        onClick={handleOnClickEye}
      />
    </InputPasswordSc>
  );
}
