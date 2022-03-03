import { DetailProductSc } from "./style";
import { CgShoppingCart } from "react-icons/cg";
import { useState } from "react";
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/reducers/cart/actions";
import { useNavigate } from "react-router-dom";
import { cart } from "../../../consts/pathRoutes";

export default function DetailProduct({
  id,
  name,
  price,
  description,
  stock,
  className,
}) {
  const dispatch = useDispatch();
  const navigateToCart = useNavigate();
  const [amount, setAmount] = useState(1);
  const handleOnChangeAmount = (e) => {
    const amount = parseInt(e.target.value);
    setAmount(amount);
  };

  const handleOnClickAddToCart = () => {
    dispatch(addToCart({ [id]: amount }));
    navigateToCart(cart);
  };
  return (
    <DetailProductSc className={className}>
      <h1>{name}</h1>
      <section className="amount">
        <label htmlFor="amount">
          <span>Cantidad</span>
          <select name="amount" id="amount" onChange={handleOnChangeAmount}>
            {generatorArray(10).map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <span className="price">$ {price * amount}</span>
      </section>
      <Button className="btn-buy" onClick={handleOnClickAddToCart}>
        <span>Agregar </span>
        <CgShoppingCart />
      </Button>
      <p className="description">{description}</p>
    </DetailProductSc>
  );
}

function generatorArray(amount) {
  const arr = [];
  for (let i = 1; i <= amount; i++) {
    arr.push(i);
  }
  return arr;
}
