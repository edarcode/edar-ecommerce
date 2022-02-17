import Nav from "../Nav/Nav";
import { HeaderSc } from "./style";
import { FaBars } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";

export default function Header() {
  return (
    <HeaderSc>
      <FaBars />
      <IoLogoApple />
      <Nav />
    </HeaderSc>
  );
}
