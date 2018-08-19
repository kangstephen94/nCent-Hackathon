import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./nav/nav";
// import { AuthRoute } from "../util/route_util";
//   ProtectedRoute,
//   UserProtectedRoute
import LandingPage from "./landing_page/landing_page";

const App = () => (
  <div>
    <Nav />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
