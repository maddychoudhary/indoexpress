import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home.js";
import Cart from "./Components/Cart.js";
import PageNotFound from "./Components/PageNotFound.js";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
