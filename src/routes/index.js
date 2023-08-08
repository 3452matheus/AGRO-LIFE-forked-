import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "../pages/home/index";
import Sobre from "../pages/sobre/index";
import Planos from "../pages/planos/index";
import Mundo from "../pages/mundo/index";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sobre" component={Sobre} />
      <Route exact path="/planos" component={Planos} />
      <Route exact path="/mundo" component={Mundo} />
    </Switch>
  );
};

export default Routes;
