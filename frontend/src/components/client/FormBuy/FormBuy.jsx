import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCart } from "../../../redux/reducers/cart/actions";
import { Button } from "../../common/Button/Button";
import InputTell from "../../common/InputTell/InputTell";
import InputText from "../../common/InputText/InputText";
import { inputTell, inputText } from "./props";
import { FormBuySc } from "./style";
import { validateFormBuy } from "./validateFormBuy";

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
  const { address, tell, cartProducts } = useSelector((state) => state.cart);
  const [err, setErr] = useState(validateFormBuy({ address, tell }));

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
        console.log({ address, tell, details: cartProducts, paymentMethod });
        dispatch(
          buyCart({ address, tell, details: cartProducts, paymentMethod })
        );
      }
    }
  };
  return (
    <FormBuySc onSubmit={handleOnSubmitBuy}>
      <CardElement options={CARD_OPTIONS} />
      <InputText className="address" {...inputText} err={err} required={true} />
      <InputTell {...inputTell} err={err} />
      <Button>Comprar</Button>
    </FormBuySc>
  );
}
