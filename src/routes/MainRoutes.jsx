import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import DashboardStaff from "../pages/DashboardStaff";
import Dashboard from "../pages/Dashboard";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/staff" component={DashboardStaff} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
