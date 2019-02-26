import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import configureStore from '../configureStore'
import App from './App';

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <Router> */}
        <App />
        {/* </Router> */}
      </Provider>
    )
  }
}
// export default withRouter(Root)
