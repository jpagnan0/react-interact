import React from 'react'
import { Route, Switch } from 'react-router'
import NavigationBar from "../containers/NavigationBar";
import DashBoardContainer from "../containers/DashBoardContainer"
import SignUpForm from "../components/SignUpForm";
const routes = (
  <div>
    <NavigationBar />
    <Switch>
      {/* <Route path="/signup" component={AuthContainer} /> */}

      <Route exact path="/" component={DashBoardContainer} />
      <Route path="/signup" component={SignUpForm} />

    </Switch>
  </div>
)

export default routes;
