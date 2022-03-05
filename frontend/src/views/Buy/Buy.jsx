import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BuySc } from "./style";
import FormBuy from "../../components/client/FormBuy/FormBuy";

const stripePromise = loadStripe(
  "pk_test_51KZTycDEat7IUYBbvhxm8jXdRhIl8hHYAo4Zzis4T426CEKPYbEsf0578jt5LYZGxdw8qtp8hFEU8oLXmppBEa8S00sWW1ZvzO"
);

export default function Buy() {
  return (
    <BuySc>
      <Elements stripe={stripePromise}>
        <FormBuy />
      </Elements>
    </BuySc>
  );
}
