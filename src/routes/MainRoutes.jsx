import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import EmailBuilder from "../pages/EmailBuilder"

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/builder" component={EmailBuilder} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
