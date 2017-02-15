import React, { Component } from 'react';
import Dashboard from 'containers/Dashboard'
import './scss/main.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
