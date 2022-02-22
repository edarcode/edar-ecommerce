import { SearchCategorySc } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/reducers/categories/actions";
import { useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";
import { useIstrue } from "../../hooks/useIstrue";
import { action } from "../../../utils/action";
import { SET_ID_CATEGORY } from "../../../redux/reducers/filterOrderProducts/const";

export default function SearchByCategory() {
  const dispatch = useDispatch();
  const { isTrue, setIsTrue } = useIstrue();
  const { categories } = useSelector((state) => state.categories);
  const { idCategory } = useSelector((state) => state.filterOrderProducts);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const handleOnClickIsTrue = (e) => {
    setIsTrue(!isTrue);
  };

  const handleOnClickIdCategory = (e) => {
    const idCategory = parseInt(e.target.id);
    dispatch(action(SET_ID_CATEGORY, idCategory));
    setIsTrue(false);
  };

  return (
    <SearchCategorySc>
      <div className="title" onClick={handleOnClickIsTrue}>
        Categorías {<BsChevronDown />}{" "}
      </div>
      {
        <ul className={(isTrue && "list list--collapse") || "list"}>
          {categories.map(({ id, name }) => (
            <li
              className={(idCategory === id && "list__selected") || ""}
              key={id}
              id={id}
              onClick={handleOnClickIdCategory}
            >
              {name}
            </li>
          ))}
        </ul>
      }
    </SearchCategorySc>
  );
}
