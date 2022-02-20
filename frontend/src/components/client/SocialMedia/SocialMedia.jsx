import { SocialMediaSc } from "./style";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { hiperLink } from "../../../utils/hiperLink";

const dataLinks = [
  {
    href: "https://github.com/EdarkoGit",
    content: <AiFillGithub />,
  },
  {
    href: "https://www.linkedin.com/in/edarcode/",
    content: <BsLinkedin />,
  },
];

export default function SocialMedia() {
  return (
    <SocialMediaSc>{dataLinks.map((item) => hiperLink(item))}</SocialMediaSc>
  );
}
