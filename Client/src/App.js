import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Dashboard from "./components/dashboard/dashboard";
import Marketplace from "./components/marketplace/marketplace";
import Settings from "./components/settings/settings";
import Other from "./components/other/other";
import Cart from "./components/cart/cart";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import RevisedDashboard from "./components/revisedDashboard/Dashboard";
import LandingPage from "./components/landing/landing";

import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="extendPage">
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <div className="app">
          <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Route path="/dashboard" component={RevisedDashboard} />
          <Route path="/marketplace" component={Marketplace} />
          <Route path="/settings" component={Settings} />
          <Route path="/cart" component={Cart} />
          <Route component={Other} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
