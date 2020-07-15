import React from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../stores";

import Home from "../pages/Home";
import NewBroadcast from "../pages/NewBroadcast";
import Database from "../pages/Database";
import Dashboard from "../pages/Dashboard";
import DashboardDraft from "../pages/DashboardDraft";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import NewSegment from "../pages/NewSegment"
import AllSegments from "../pages/AllSegments"
import PreviewEmail from "../pages/PreviewEmail"
import HowToUse from "../pages/HowToUse"
import EmailBuilder from "../pages/EmailBuilder"
import Profile from "../pages/Profile"
import Redirect from "../pages/Redirect"
const MainRoutes = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/broadcast" component={NewBroadcast} />
          <Route exact path="/broadcast/:mailId" component={PreviewEmail} />
          <Route exact path="/database" component={Database} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/draft" component={DashboardDraft} />
          <Route exact path="/draft/:draftId" component={NewBroadcast} />
          <Route exact path="/segment" component={NewSegment} />
          <Route exact path="/segment/:segmentId" component={AllSegments} />
          <Route exact path="/segment-list" component={AllSegments} />
          <Route exact path="/how-to-use" component={HowToUse} />
          <Route exact path="/build" component={EmailBuilder} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/red/:links" component={Redirect} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default MainRoutes;
