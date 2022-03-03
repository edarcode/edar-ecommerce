import { CartSc } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartProducts } from "../../redux/reducers/cart/actions";
import CardProductCart from "../../components/client/CardProductCart/CardProductCart";
import { Button } from "../../components/common/Button/Button";
import { useNavigate } from "react-router-dom";
import { store } from "../../consts/pathRoutes";

export default function Cart() {
  const dispatch = useDispatch();
  const navigateToStore = useNavigate();
  const { cart, cartProducts } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCartProducts({ cart }));
  }, [dispatch, cart]);

  if (!cartProducts.length) navigateToStore(store);
  return (
    <CartSc>
      <section>
        {cartProducts &&
          cartProducts.map((item) => (
            <CardProductCart key={item.id} {...item} />
          ))}
      </section>
      <span>
        Total $ {cartProducts.reduce((acc, item) => acc + item.total, 0)}
      </span>
      <Button>Comprar</Button>
    </CartSc>
  );
}
