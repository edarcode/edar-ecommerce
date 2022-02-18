import { AppSc } from "./AppSc";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Cart from "./views/Cart/Cart";
import Catalogue from "./views/Catalogue/Catalogue";
import Contact from "./views/Contact/Contact";
import Dashboard from "./views/Dashboard/Dashboard";
import Product from "./views/Product/DetailProduct";
import Login from "./views/Login/Login";
import Store from "./views/Store/Store";
import Client from "./views/Client/Client";
import Admin from "./views/Admin/Admin";
import {
  home,
  cart,
  catalogue,
  contact,
  login,
  store,
  product,
  dashboard,
} from "./consts/pathRoutes";
function App() {
  return (
    <AppSc className="App">
      <Routes>
        {/* ------------------CLIENT------------------------------ */}
        <Route path={home} element={<Client />}>
          <Route index element={<Home />} />
          <Route path={store} element={<Store />} />
          <Route path={catalogue} element={<Catalogue />} />
          <Route path={contact} element={<Contact />} />
          <Route path={login} element={<Login />} />
          <Route path={cart} element={<Cart />} />
          <Route path={dashboard} element={<Dashboard />} />
          <Route path={product} element={<Product />} />
        </Route>
        {/* ------------------ADMIN------------------------------ */}
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </AppSc>
  );
}

export default App;
