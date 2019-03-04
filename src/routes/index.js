import React from 'react'
import { Route, Switch } from 'react-router'
import NavigationBar from "../containers/NavigationBar";
import DashBoardContainer from "../containers/DashBoardContainer"
import Login from "../components/Login";
const routes = (
  <div>
    <NavigationBar />
    <Switch>
      {/* <Route path="/signup" component={AuthContainer} /> */}

      <Route exact path="/" component={DashBoardContainer} />
      <Route exact path="/signin" component={Login} />

    </Switch>
  </div>
)

export default routes;
