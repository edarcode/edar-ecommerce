import Nav from "../Nav/Nav";
import { HeaderSc } from "./style";
import { FaBars } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";
import { useIstrue } from "../hooks/useIstrue";

export default function Header() {
  const { isTrue, setIsTrue } = useIstrue();

  const handleOnClickNav = (e) => {
    setIsTrue(!isTrue);
  };

  return (
    <HeaderSc>
      <FaBars className="fabars" onClick={handleOnClickNav} />
      <IoLogoApple />
      <Nav className={isTrue && "collapse"} />
    </HeaderSc>
  );
}
