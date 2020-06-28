import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

<<<<<<< HEAD
import Home from "../pages/Home";
import EmailBuilder from "../pages/EmailBuilder"
import Database from "../pages/Database";
=======
import DashboardStaff from "../pages/DashboardStaff";
import Dashboard from "../pages/Dashboard";
>>>>>>> origin/release


const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={Home} />
        <Route exact path="/builder" component={EmailBuilder} />
        <Route exact path="/database" component={Database} />
=======
        <Route exact path="/staff" component={DashboardStaff} />
        <Route exact path="/dashboard" component={Dashboard} />
>>>>>>> origin/release
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
