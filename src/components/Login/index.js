import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from 'actions/actions'

const Login = React.createClass({
  
  getInitialState() {
    return {
      formComplete: false
    }
  },

  checkFormComplete() {
    const { email, password } = this.refs
    const emailReg = /\S+@\S+\.\S+/
    let formComplete
    
    if (
      email.value.length > 0 &&
      password.value.length > 0 &&
      emailReg.test(email.value)
      ) {
      formComplete = true
    } else {
      formComplete = false
    }

    this.setState({ formComplete })
  },

  handleSubmit() {
    const { email, password } = this.refs
    
    this.props.dispatch(loginUser({
        email: email.value,
        password: password.value
    }))
  },

  render() {
    const { switchVisible } = this.props
    const { formComplete } = this.state

    return (
        <div className='entry--box login'>
          <h3>Login</h3>
          <form>
            <div className='row'>
              <input onKeyUp={this.checkFormComplete} ref='email' type='email' placeholder='email'/>
              <input onKeyUp={this.checkFormComplete} ref='password' type='password' placeholder='password' />
            </div>
          </form>
          <button className='submit' onClick={this.handleSubmit} disabled={!formComplete}>Submit</button>
          <p>Already have an account? Log in<button onClick={switchVisible}>here</button>.</p>
        </div>
    )
  }
})


export default connect()(Login)
