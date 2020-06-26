import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import DashboardStaff from "../pages/DashboardStaff";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DashboardStaff} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
