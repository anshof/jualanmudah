import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import NewBroadcast from "../pages/NewBroadcastTemplate";
import EmailBuilder from "../pages/EmailBuilder";
import DashboardStaff from "../pages/DashboardStaff";
import Dashboard from "../pages/Dashboard";
import DashboardDraft from "../pages/DashboardDraft";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AboutUs from "../pages/AboutUs";
import Database from "../pages/Database";
import Accordion from "../pages/Accordion";
import NewSegment from "../pages/NewSegment";
const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/broadcast" component={NewBroadcast} />
        <Route exact path="/builder" component={EmailBuilder} />
        <Route exact path="/staff" component={DashboardStaff} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/draft" component={DashboardDraft} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/database" component={Database} />
        <Route exact path="/accordion" component={Accordion} />
        <Route exact path="/new-segment" component={NewSegment} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
