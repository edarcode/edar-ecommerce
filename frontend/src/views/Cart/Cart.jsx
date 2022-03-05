import { CartSc } from "./style";
import { useSelector } from "react-redux";
import CardProductCart from "../../components/client/CardProductCart/CardProductCart";
import { Button } from "../../components/common/Button/Button";
import { Navigate } from "react-router-dom";
import { buy, store } from "../../consts/pathRoutes";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, cartProducts } = useSelector((state) => state.cart);

  if (!Object.keys(cart).length) return <Navigate to={store} />;
  if (!cartProducts.length) return null;
  return (
    <CartSc>
      <section className="cart-products">
        {cartProducts &&
          cartProducts.map((item) => (
            <CardProductCart key={item.id} {...item} />
          ))}
        <div className="buy">
          <span>
            Total $ {cartProducts.reduce((acc, item) => acc + item.total, 0)}
          </span>
          <Link to={buy}>
            <Button>Comprar</Button>
          </Link>
        </div>
      </section>
    </CartSc>
  );
}
