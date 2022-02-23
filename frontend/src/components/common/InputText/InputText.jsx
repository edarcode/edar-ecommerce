import { action } from "../../../utils/action";
import { InputTextSc } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { bgNavbar } from "../../../consts/colors";

export default function InputText({
  placeholder,
  nameReducer,
  keyState,
  type,
}) {
  const inputText = useRef(null);
  const dispatch = useDispatch();
  const state = useSelector((state) => state[nameReducer]);

  const handleOnChange = (e) => {
    const inputValue = e.target.value;
    type && dispatch(action(type, inputValue));
  };

  const handleOnFocus = () => {
    inputText.current.style.outline = `2px solid ${bgNavbar}`;
  };
  const handleOnFocusOut = () => {
    inputText.current.style.outline = "";
  };

  return (
    <InputTextSc ref={inputText}>
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
