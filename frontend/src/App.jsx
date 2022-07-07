import { Route, Routes } from "react-router-dom";
import { AppSc } from "./AppSc";
import AuthClient from "./components/auth/AuthClient/AuthClient";
import Account from "./components/client/Account/Account";
import { useInitCartStorage } from "./components/hooks/useInitCartStorage";
import { useInitTokenStorage } from "./components/hooks/useInitTokenStorage";
import {
  account,
  buy,
  cart,
  contact,
  dashboard,
  home,
  login,
  product,
  register,
  resetPassword,
  store,
} from "./consts/pathRoutes";
import Admin from "./views/Admin/Admin";
import Buy from "./views/Buy/Buy";
import Cart from "./views/Cart/Cart";
import Client from "./views/Client/Client";
import Contact from "./views/Contact/Contact";
import Dashboard from "./views/Dashboard/Dashboard";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Product from "./views/Product/Product";
import Register from "./views/Register/Register";
import ResetPassword from "./views/ResetPassword/ResetPassword";
import Store from "./views/Store/Store";

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
