import { action } from "../../../utils/action";
import { InputTextSc } from "./style";
import { useDispatch, useSelector } from "react-redux";

export default function InputText({
  err,
  placeholder,
  nameReducer,
  keyState,
  type,
  className,
  required,
}) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state[nameReducer]);

  const handleOnChange = (e) => {
    const inputValue = e.target.value;
    type && dispatch(action(type, inputValue));
  };

  return (
    <InputTextSc
      className={className}
      err={(state[keyState] === "" && "none") || err[keyState]}
    >
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleOnChange}
        autoComplete={"true"}
        value={keyState && state[keyState]}
        required={required}
      />
    </InputTextSc>
  );
}
