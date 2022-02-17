import { useLocation } from "react-router-dom";
import { link } from "../../../utils/link";
import { LiSc } from "./style";

export default function Li({ to, text }) {
  const { pathname } = useLocation();
  return <LiSc selected={pathname === to}>{link({ to, text })}</LiSc>;
}
