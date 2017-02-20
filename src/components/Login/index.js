import React from 'react'

const Login = React.createClass({
  render() {
    const { switchVisible } = this.props
    return (
        <div className='entry--box login'>
          <h3>Log in</h3>
           <p>Don't have an account? Sign up<button onClick={switchVisible}>here</button>.</p>
        </div>
    )
  }
})

export default Login
