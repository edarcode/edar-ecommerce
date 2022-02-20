import { ClientSc } from "./style";
import { Outlet } from "react-router-dom";
import Footer from "../../components/client/Footer/Footer";
import Header from "../../components/client/Header/Header";

export default function Client() {
  return (
    <ClientSc>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ClientSc>
  );
}
