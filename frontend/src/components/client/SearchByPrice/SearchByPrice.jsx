import { useDispatch, useSelector } from "react-redux";
import {
  SET_MAX,
  SET_MIN,
} from "../../../redux/reducers/filterOrderProducts/const";
import { action } from "../../../utils/action";
import { SearchByPriceSc } from "./style";

export default function SearchByPrice() {
  const dispatch = useDispatch();
  const { min, max } = useSelector((state) => state.filterOrderProducts);

  const handleOnChangeMin = (e) => {
    const min = parseInt(e.target.value);
    dispatch(action(SET_MIN, min));
  };
  const handleOnChangeMax = (e) => {
    const max = parseInt(e.target.value);
    dispatch(action(SET_MAX, max));
  };

  return (
    <SearchByPriceSc>
      <input
        type="range"
        min={0}
        max={2000}
        value={(min && min) || 0}
        onChange={handleOnChangeMin}
      />
      {min && <span>{min}</span>}
      <input
        type="range"
        min={min}
        max={4000}
        value={(max && max) || 0}
        onChange={handleOnChangeMax}
      />
      {max && <span>{max}</span>}
    </SearchByPriceSc>
  );
}
