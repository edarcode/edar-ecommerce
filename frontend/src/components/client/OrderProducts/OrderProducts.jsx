import { OrderProductsSc } from "./style";
import { BsChevronDown } from "react-icons/bs";
import { useIstrue } from "../../hooks/useIstrue";
import { useDispatch, useSelector } from "react-redux";
/* import { useEffect } from "react"; */
import { SET_ORDER } from "../../../redux/reducers/filterOrderProducts/const";
import { action } from "../../../utils/action";

const sortTypes = [
  {
    name: "Costoso",
    value: "price,desc",
  },
  {
    name: "Económico",
    value: "price,asc",
  },
  {
    name: "Defecto",
    value: null,
  },
];

export default function OrderProducts() {
  const dispatch = useDispatch();
  const { isTrue, setIsTrue } = useIstrue();
  const { order } = useSelector((state) => state.filterOrderProducts);

  const handleOnClickIsTrue = (e) => {
    setIsTrue(!isTrue);
  };

  const handleOnClickOrder = ({ value }) => {
    dispatch(action(SET_ORDER, value));
    setIsTrue(false);
  };

  return (
    <OrderProductsSc>
      <div className="title" onClick={handleOnClickIsTrue}>
        Ordenar {<BsChevronDown />}
      </div>
      {
        <ul className={(isTrue && "list list--collapse") || "list"}>
          {sortTypes.map(({ name, value }) => (
            <li
              className={(order === value && "list__selected") || ""}
              key={name}
              onClick={() => handleOnClickOrder({ value })}
            >
              {name}
            </li>
          ))}
        </ul>
      }
    </OrderProductsSc>
  );
}
