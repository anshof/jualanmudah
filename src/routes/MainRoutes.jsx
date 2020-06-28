import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import DashboardStaff from "../pages/DashboardStaff";
import NewBroadcast from "../pages/NewBroadcastTemplate";
import Home from "../pages/Home";
import EmailBuilder from "../pages/EmailBuilder"
import Database from "../pages/Database";


const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/staff" component={DashboardStaff} />
        <Route exact path="/broadcast" component={NewBroadcast} />
        <Route exact path="/builder" component={EmailBuilder} />
        <Route exact path="/database" component={Database} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
