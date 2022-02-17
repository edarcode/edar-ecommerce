import { Link } from "react-router-dom";

export const link = ({ to, text }) => {
  return <Link to={to}>{text}</Link>;
};
