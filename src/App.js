import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Match } from 'react-router'
import configureStore from 'store'

import Dashboard from 'containers/Dashboard'
import './scss/main.scss'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className='app'>
            <Match exactly pattern='/' component={Dashboard} />
            <Match pattern='/dashboard' component={Dashboard} />
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
}

export default App;
