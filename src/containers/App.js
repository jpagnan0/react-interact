import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import routes from "../routes";
import { ConnectedRouter } from 'connected-react-router'


export default function App({history}) {
  return (
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  );
}
