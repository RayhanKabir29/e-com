import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Products from "./components/Products/Products";

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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
