import React from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../stores";

import Home from "../pages/Home";
import NewBroadcast from "../pages/NewBroadcast";
import EmailBuilder from "../pages/EmailBuilder";
import Database from "../pages/Database";
import DashboardStaff from "../pages/DashboardStaff";
import Dashboard from "../pages/Dashboard";
import DashboardDraft from "../pages/DashboardDraft";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import AboutUs from "../pages/AboutUs"
import Accordion from "../pages/Accordion"
import NewSegment from "../pages/NewSegment"
const MainRoutes = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/broadcast" component={Accordion} />
          <Route exact path="/broad" component={NewBroadcast} />
          <Route exact path="/builder" component={EmailBuilder} />
          <Route exact path="/database" component={Database} />
          <Route exact path="/staff" component={DashboardStaff} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/draft" component={DashboardDraft} />
          <Route exact path="/draft/:draftId" component={Accordion} />
          <Route exact path="/about" component={AboutUs} />
          {/* <Route exact path="/accord" component={Accordion} /> */}
          <Route exact path="/segment" component={NewSegment} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default MainRoutes;
