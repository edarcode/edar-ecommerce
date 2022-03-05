import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../utils/action";
import { InputTellSc } from "./style";

export default function InputTell({
  err,
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
    <InputTellSc err={(state[keyState] === "" && "none") || err[keyState]}>
      <input
        type="tell"
        required
        placeholder={placeholder}
        onChange={handleOnChange}
        autoComplete={"true"}
        value={keyState && state[keyState]}
      />
    </InputTellSc>
  );
}
