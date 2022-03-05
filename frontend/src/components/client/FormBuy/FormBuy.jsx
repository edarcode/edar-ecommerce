import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCart } from "../../../redux/reducers/cart/actions";
import {
  CLEAR_CART,
  SET_RES_BUY_CART,
} from "../../../redux/reducers/cart/const";
import { action } from "../../../utils/action";
import { Button } from "../../common/Button/Button";
import InputTell from "../../common/InputTell/InputTell";
import InputText from "../../common/InputText/InputText";
import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../pop-ups/Alert/Alert";
import { inputTell, inputText } from "./props";
import { FormBuySc } from "./style";
import { validateFormBuy } from "./validateFormBuy";
import { useNavigate } from "react-router-dom";
import { store } from "../../../consts/pathRoutes";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};
export default function FormBuy() {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const navigateToStore = useNavigate();
  const { address, tell, cartProducts, resBuyCart } = useSelector(
    (state) => state.cart
  );
  const [err, setErr] = useState(validateFormBuy({ address, tell }));
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setErr(validateFormBuy({ address }));
  }, [address]);

  const handleOnSubmitBuy = async (e) => {
    e.preventDefault();
    if (!Object.keys(err).length) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });
      if (!error) {
        setIsLoading(true);
        dispatch(
          buyCart({
            address,
            tell,
            details: cartProducts,
            paymentMethod,
            setIsLoading,
          })
        );
      }
    }
  };

  const handleOnClickClearBuyCart = () => {
    if (
      resBuyCart.msg === "Pago realizado, la factura fue enviada a su correo"
    ) {
      dispatch(action(CLEAR_CART));
      elements.getElement(CardElement).clear();
      navigateToStore(store);
    } else {
      dispatch(action(SET_RES_BUY_CART, {}));
    }
  };

  return (
    <FormBuySc onSubmit={handleOnSubmitBuy}>
      <CardElement options={CARD_OPTIONS} />
      <InputText className="address" {...inputText} err={err} required={true} />
      <InputTell {...inputTell} err={err} />
      <Button>Comprar</Button>
      {isLoading && <Spinner />}
      {resBuyCart.msg && (
        <Alert msg={resBuyCart.msg} onClick={handleOnClickClearBuyCart} />
      )}
    </FormBuySc>
  );
}
