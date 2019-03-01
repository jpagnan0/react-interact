import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore, { history } from '../configureStore'
import App from './App';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { createBrowserHistory } from 'history';
import { withRouter } from 'react-router-dom';
const store = configureStore()

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <App history={history} />
        </Router>
      </Provider>
    )
  }
}
export default Root
