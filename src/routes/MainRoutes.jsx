import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import EmailBuilder from "../pages/EmailBuilder"
import MailBuild from "../components/MailBuild"
// import App from "../pages/TinyEditor"
const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={EmailBuilder} />
        {/* <Route exact path="/" component={MyEditor} /> */}
        <Route exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
