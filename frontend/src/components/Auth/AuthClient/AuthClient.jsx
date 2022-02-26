import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../../consts/pathRoutes";

export default function AuthClient({ children }) {
  const { token } = useSelector((state) => state.storage);
  if (!token) return <Navigate to={login} replace />;
  return children;
}
