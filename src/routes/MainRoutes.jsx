import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import NewBroadcast from "../pages/NewBroadcastTemplate";
import EmailBuilder from "../pages/EmailBuilder"
import Database from "../pages/Database";
import DashboardStaff from "../pages/DashboardStaff";
import Dashboard from "../pages/Dashboard";


const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/broadcast" component={NewBroadcast} />
        <Route exact path="/builder" component={EmailBuilder} />
        <Route exact path="/database" component={Database} />
        <Route exact path="/staff" component={DashboardStaff} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
