import { SearchByNameSc } from "./style";
import { BiSearchAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../utils/action";
import { SET_NAME } from "../../../redux/reducers/filterOrderProducts/const";

export default function SearchByName() {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.filterOrderProducts);

  const handleOnChangeName = (e) => {
    const name = e.target.value;
    dispatch(action(SET_NAME, name));
  };

  return (
    <SearchByNameSc>
      <input type="text" value={name} onChange={handleOnChangeName} />
      <BiSearchAlt />
    </SearchByNameSc>
  );
}
