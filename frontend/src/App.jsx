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
import Register from "./views/Register/Register";
import {
  home,
  cart,
  catalogue,
  contact,
  login,
  store,
  product,
  dashboard,
  register,
  profile,
} from "./consts/pathRoutes";
import { useInitStorage } from "./components/hooks/useInitStorage";
import Account from "./components/client/Account/Account";
import AuthClient from "./components/Auth/AuthClient/AuthClient";
function App() {
  useInitStorage();
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
          <Route
            path={profile}
            element={
              <AuthClient>
                <Account />
              </AuthClient>
            }
          />
          <Route path={cart} element={<Cart />} />
          <Route path={register} element={<Register />} />
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
