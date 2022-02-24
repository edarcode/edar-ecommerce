import { action } from "../../../utils/action";
import { InputTextSc } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { bgNavbar, isRight, isWrong } from "../../../consts/colors";

export default function InputText({
  err,
  placeholder,
  nameReducer,
  keyState,
  type,
}) {
  const outlineRight = `2px solid ${isRight}`;
  const outlineWrong = `2px solid ${isWrong}`;
  const style = { outline: (err[keyState] && outlineWrong) || outlineRight };
  const inputText = useRef(null);
  const dispatch = useDispatch();
  const state = useSelector((state) => state[nameReducer]);

  useEffect(() => {
    inputText.current.style.outline = "";
  }, []);

  const handleOnChange = (e) => {
    const inputValue = e.target.value;
    type && dispatch(action(type, inputValue));
  };

  const handleOnFocus = () => {
    inputText.current.style.outline = `2px solid ${bgNavbar}`;
  };
  const handleOnFocusOut = () => {
    inputText.current.style.outline =
      (err[keyState] && outlineWrong) || outlineRight;
  };

  return (
    <InputTextSc ref={inputText} style={style}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnFocusOut}
        autoComplete={"true"}
        value={keyState && state[keyState]}
      />
    </InputTextSc>
  );
}
