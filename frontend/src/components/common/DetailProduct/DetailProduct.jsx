import { DetailProductSc } from "./style";
import { CgShoppingCart } from "react-icons/cg";
import { useState } from "react";
import { Button } from "../Button/Button";

export default function DetailProduct({
  name,
  price,
  description,
  stock,
  className,
}) {
  const [amount, setAmount] = useState(1);
  const handleOnChangeAmount = (e) => {
    const amount = e.target.value;
    setAmount(amount);
  };
  return (
    <DetailProductSc className={className}>
      <h1>{name}</h1>
      <section className="buy">
        <label htmlFor="amount" className="amount">
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
      <Button className="btn-buy">
        <span>Comprar </span>
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
