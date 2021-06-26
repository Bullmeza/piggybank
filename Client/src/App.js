import React from "react"
import { Route, Switch } from "react-router-dom"
import Login from "./components/login"
import Dashboard from "./components/dashboard"
import Marketplace from "./components/marketplace"
import Settings from "./components/settings"
import Other from "./components/other"

function App() {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/marketplace" component={Marketplace} />
      <Route path="/settings" component={Settings} />
      <Route component={Other} />
    </Switch>
  );
}

export default App;
