import { link } from "../../utils/link";
import { NavSc } from "./style";

export default function Nav() {
  return (
    <NavSc>
      <ul>
        <li>{link({ to: "/", text: "Home" })}</li>
        <li>{link({ to: "/cart", text: "Cart" })}</li>
        <li>{link({ to: "/catalogue", text: "Catalogue" })}</li>
        <li>{link({ to: "/contact", text: "Contact" })}</li>
        <li>{link({ to: "/dashboard", text: "Dashboard" })}</li>
        <li>{link({ to: "/product", text: "Product" })}</li>
        <li>{link({ to: "/login", text: "Login" })}</li>
        <li>{link({ to: "/store", text: "Store" })}</li>
      </ul>
    </NavSc>
  );
}
