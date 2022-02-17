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
import Header from "./components/Header/Header";
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
      <Header />
      <Routes>
        <Route path={home} element={<Home />} />
        <Route path={store} element={<Store />} />
        <Route path={catalogue} element={<Catalogue />} />
        <Route path={contact} element={<Contact />} />
        <Route path={cart} element={<Cart />} />
        <Route path={login} element={<Login />} />
        <Route path={dashboard} element={<Dashboard />} />
        <Route path={product} element={<Product />} />
      </Routes>
    </AppSc>
  );
}

export default App;
