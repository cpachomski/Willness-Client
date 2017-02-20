import React from 'react'

const Login = React.createClass({
  
  getInitialState() {
    return {
      formComplete: false
    }
  },

  checkFormComplete() {
    const { usernameOrEmail, password } = this.refs
    let formComplete
    
    if (usernameOrEmail.value.length > 0 && password.value.length > 0) {
      formComplete = true
    } else {
      formComplete = false
    }

    console.log(formComplete)

    this.setState({ formComplete })
  },

  handleSubmit() {
    console.log('yo')
  },

  render() {
    const { switchVisible } = this.props
    const { formComplete } = this.state

    return (
        <div className='entry--box login'>
          <h3>Login</h3>
          <form>
            <div className='row'>
              <input onKeyUp={this.checkFormComplete} ref='usernameOrEmail' type='text' placeholder='email or username'/>
              <input onKeyUp={this.checkFormComplete} ref='password' type='password' placeholder='password' />
            </div>
          </form>
          <button className='submit' onClick={this.handleSubmit} disabled={!formComplete}>Submit</button>
          <p>Already have an account? Log in<button onClick={switchVisible}>here</button>.</p>
        </div>
    )
  }
})

export default Login
