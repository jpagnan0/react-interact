import { AppContainer } from 'react-hot-loader'

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore, { history } from '../configureStore'
import App from './App';
const store = configureStore()


class Root extends Component {
  render() {
    return (
      <AppContainer>
        <Provider store={store}>
          <App history={history} />
        </Provider>
      </AppContainer>
    )
  }
}
export default Root
