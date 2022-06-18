import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Products from "./components/Products/Products";
import Register from "./components/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product/:ProductId">
          <ProductDetails />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
