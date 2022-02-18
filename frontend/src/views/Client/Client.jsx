import { ClientSc } from "./style";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function Client() {
  return (
    <ClientSc>
      <Header />
      <Outlet />
    </ClientSc>
  );
}
