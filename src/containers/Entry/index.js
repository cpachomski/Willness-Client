import React from 'react'
import { Redirect } from 'react-router'
import EntrySwitcher from 'components/EntrySwitcher'
import { connect } from 'react-redux' 

const Login = React.createClass({

  render() {
    const { token } = this.props

    return (
      <div className='entry'>
        <div className='gumbotron'>
          <h1>Willness</h1>
        </div>
        {
          token ? 
            <Redirect to='/dashboard' />
          :
            <div className='entry-switcher--container'>
              <EntrySwitcher />
            </div>
        }
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    token: state.user.token
  }
}

export default connect(mapStateToProps)(Login)
