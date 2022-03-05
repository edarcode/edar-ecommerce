import { AppSc } from "./AppSc";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Cart from "./views/Cart/Cart";
import Catalogue from "./views/Catalogue/Catalogue";
import Contact from "./views/Contact/Contact";
import Dashboard from "./views/Dashboard/Dashboard";
import Product from "./views/Product/Product";
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
  account,
  resetPassword,
  buy,
} from "./consts/pathRoutes";
import { useInitTokenStorage } from "./components/hooks/useInitTokenStorage";
import Account from "./components/client/Account/Account";
import AuthClient from "./components/auth/AuthClient/AuthClient";
import ResetPassword from "./views/ResetPassword/ResetPassword";
import { useInitCartStorage } from "./components/hooks/useInitCartStorage";
import Buy from "./views/Buy/Buy";

function App() {
  useInitTokenStorage();
  useInitCartStorage();
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
            path={account}
            element={
              <AuthClient>
                <Account />
              </AuthClient>
            }
          />
          <Route path={cart} element={<Cart />} />
          <Route path={register} element={<Register />} />
          <Route path={`${product}/:id`} element={<Product />} />
          <Route path={`${resetPassword}/:token`} element={<ResetPassword />} />
          <Route
            path={buy}
            element={
              <AuthClient>
                <Buy />
              </AuthClient>
            }
          />
        </Route>
        {/* ------------------ADMIN------------------------------ */}
        <Route path="/admin" element={<Admin />}>
          <Route path={dashboard} element={<Dashboard />} />
        </Route>
      </Routes>
    </AppSc>
  );
}

export default App;
