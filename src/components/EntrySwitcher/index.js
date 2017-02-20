import React from 'react'
import Login from 'components/Login'
import Signup from 'components/Signup'

const EntrySwitcher = React.createClass({

  getInitialState() {
    return {
      loginVisible: true
    }
  },

  switchVisible() {
    this.setState({
      loginVisible: !this.state.loginVisible
    })
  },

  render() {
    const { loginVisible } = this.state

    return (
      <div className='entry-switcher'>
        {
          loginVisible ? 
            <Login switchVisible={this.switchVisible}/>
          :
            <Signup switchVisible={this.switchVisible}/>
        }
      </div>
    )
  }
})

export default EntrySwitcher
    
