import React from 'react'
import { Route, Switch } from 'react-router'
import Landing from "../containers/Landing";
import NavigationBar from "../containers/NavigationBar";
import DashBoardContainer from "../containers/DashBoardContainer"
import SignUp from "../components/SignUp";
import Login from "../components/Login";

const routes = (
  <div>
    <NavigationBar />
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/dashboard" component={DashBoardContainer} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />

    </Switch>
  </div>
)

export default routes;
