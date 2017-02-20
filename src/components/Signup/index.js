import React from 'react'

const Signup = React.createClass({
  render() {
    const { switchVisible } = this.props
    return (
      <div className='entry--box signup'>
        <h3>Signup</h3>
        <form>
          <div className='column'>
            <input ref='firstName' type='text' placeholder='first' />
            <input ref='lastName' type='text' placeholder='last'/>
            <input ref='username' type='text' placeholder='username' />
          </div>
          <div className='column'>
            <input  ref='email' type='email' placeholder='email'/>
            <input type='password' placeholder='password' />
            <input type='password' placeholder='confirm password' />
          </div>
        </form>
        <p>Already have an account? Log in<button onClick={switchVisible}>here</button>.</p>
      </div>
    )
  }
})

export default Signup
