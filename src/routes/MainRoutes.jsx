import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import NewBroadcast from "../pages/NewBroadcastTemplate";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={NewBroadcast} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
