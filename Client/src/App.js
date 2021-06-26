import React from "react"
import { Route, Switch } from "react-router-dom"
import Login from "./components/login"
import Dashboard from "./components/dashboard/dashboard"
import Marketplace from "./components/marketplace/marketplace"
import Settings from "./components/settings/settings"
import Other from "./components/other/other"
import Cart from "./components/cart/cart"

function App() {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/marketplace" component={Marketplace} />
      <Route path="/settings" component={Settings} />
      <Route path="/cart" component={Cart} />
      <Route component={Other} />
    </Switch>
  );
}

export default App;
