import About from "../About/About";
import SocialMedia from "../SocialMedia/SocialMedia";
import { FooterSc } from "./style";

export default function Footer() {
  return (
    <FooterSc>
      <SocialMedia />
      <About />
    </FooterSc>
  );
}
