import React from 'react'
import { Redirect } from 'react-router'
import EntrySwitcher from 'components/EntrySwitcher'

const Login = React.createClass({

  render() {
    return (
      <div className='entry'>
        <div className='gumbotron'>
          <h1>Willness</h1>
        </div>
        <div className='entry-switcher--container'>
          <EntrySwitcher />
        </div>
      </div>
    )
  }
})

export default Login
