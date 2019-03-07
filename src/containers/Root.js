import { AppContainer } from 'react-hot-loader'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore, { history } from '../configureStore'
import App from './App';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import * as colors from '@material-ui/core/colors';
console.log(colors)
const store = configureStore()
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: colors.blueGrey,
    secondary: colors.indigo,
  }
})

class Root extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>

        <AppContainer>
          <Provider store={store}>
            <App history={history} />
          </Provider>
        </AppContainer>
      </MuiThemeProvider>
    )
  }
}
export default Root;
