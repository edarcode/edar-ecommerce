import Nav from "../Nav/Nav";
import { HeaderSc } from "./style";
import { FaBars } from "react-icons/fa";
import { VscBracketDot } from "react-icons/vsc";
import { useIstrue } from "../hooks/useIstrue";

export default function Header() {
  const { isTrue, setIsTrue } = useIstrue();

  const handleOnClickNav = (e) => {
    setIsTrue(!isTrue);
  };

  return (
    <HeaderSc>
      <FaBars className="fabars" onClick={handleOnClickNav} />
      <VscBracketDot />
      <Nav className={isTrue && "collapse"} />
    </HeaderSc>
  );
}
