import { ClientSc } from "./style";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

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
