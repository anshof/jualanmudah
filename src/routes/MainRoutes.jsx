import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Database from "../pages/Database";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/database" component={Database} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
