import { useDispatch } from "react-redux";
import { deleteCart, updateCart } from "../../../redux/reducers/cart/actions";
import { generatorArray } from "../../../utils/generatorArray";
import { CardProductCartSc } from "./style";
import { Link } from "react-router-dom";
import { product } from "../../../consts/pathRoutes";
import { AiFillDelete } from "react-icons/ai";

export default function CardProductCart({ id, name, images, amount, total }) {
  const dispatch = useDispatch();

  const handleOnChangeAmount = (e) => {
    const amount = parseInt(e.target.value);
    dispatch(updateCart({ id, amount }));
  };
  const handleOnClickDeleteCart = (e) => {
    dispatch(deleteCart({ id }));
  };

  if (!id) return null;
  return (
    <CardProductCartSc>
      <select
        name="amount"
        id="amount"
        onChange={handleOnChangeAmount}
        value={amount}
      >
        {generatorArray(10).map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <Link to={`${product}/${id}`}>
        <img src={images[0].url} alt="" />
      </Link>
      <div className="name-price">
        <h6 className="name-product">{name}</h6>
        <span>$ {total}</span>
      </div>
      <AiFillDelete onClick={handleOnClickDeleteCart} />
    </CardProductCartSc>
  );
}
