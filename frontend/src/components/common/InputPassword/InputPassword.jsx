import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../utils/action";
import { InputPasswordSc } from "./style";
import { BsEyeSlash, BsEye } from "react-icons/bs";

export default function InputPassword({
  placeholder,
  nameReducer,
  keyState,
  type,
}) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state[nameReducer]);

  const handleOnChange = (e) => {
    const inputValue = e.target.value;
    type && dispatch(action(type, inputValue));
  };
  return (
    <InputPasswordSc>
      <input
        type="password"
        placeholder={placeholder}
        onChange={handleOnChange}
        value={keyState && state[keyState]}
      />
      <BsEyeSlash />
      <BsEye />
    </InputPasswordSc>
  );
}
