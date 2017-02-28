import React from 'react'
import NavBar from 'components/NavBar'

const Settings = React.createClass({

  render() {
    return (
      <div className='page settings'>
        <NavBar />
        <div className='page--container'>
          <h1>Settings</h1>
        </div>
      </div>
    )
  }
})

export default Settings
