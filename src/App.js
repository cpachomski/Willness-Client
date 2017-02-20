import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Match } from 'react-router'
import configureStore from 'store'

import Entry from 'containers/Entry'
import Dashboard from 'containers/Dashboard'
import Workouts from 'containers/Workouts'
import Profile from 'containers/Profile'
import Settings from 'containers/Settings'

import './scss/main.scss'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className='app'>
            <Match exactly pattern='/' component={Entry} />
            <Match pattern='/dashboard' component={Dashboard} />
            <Match pattern='/workouts' component={Workouts} />
            <Match pattern='/profile' component={Profile} />
            <Match pattern='/settings' component={Settings} />
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
}

export default App;
