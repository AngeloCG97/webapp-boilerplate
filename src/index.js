import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { UALProvider, withUAL } from 'ual-reactjs-renderer'

import { authenticators, network } from './utils/ualAuthenticators'
import App from './App'
import store from './store'
import theme from './theme'
import * as serviceWorker from './serviceWorker'

const AppWithUAL = withUAL(App)

render(
  <Provider store={store}>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <UALProvider
        chains={[network]}
        authenticators={authenticators}
        appName="eoscrwebappboilerplate"
      >
        <AppWithUAL />
      </UALProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
