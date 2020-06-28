import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

<<<<<<< HEAD
import NewBroadcast from "../pages/NewBroadcastTemplate";
=======
import DashboardStaff from "../pages/DashboardStaff";
import Dashboard from "../pages/Dashboard";
>>>>>>> release

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={NewBroadcast} />
=======
        <Route exact path="/staff" component={DashboardStaff} />
        <Route exact path="/dashboard" component={Dashboard} />
>>>>>>> release
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
