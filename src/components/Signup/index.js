import React from 'react'
import { connect } from 'react-redux'
import { registerUser } from 'actions/actions'

const Signup = React.createClass({

  getInitialState() {

    return {
      formComplete: false
    }
  },

  checkFormComplete() {
    const { firstName, lastName, email, password, passwordConfirmation } = this.refs
    const emailReg = /\S+@\S+\.\S+/
    let formComplete = false

    if (
      emailReg.test(email.value) &&
      password.value === passwordConfirmation.value &&
      firstName.value !== undefined &&
      lastName.value !== undefined &&
      password.value !== undefined &&
      password.value.length > 0 &&
      passwordConfirmation.value.length > 0 &&
      passwordConfirmation.value !== undefined) { 
        formComplete = true
    } 
    
    this.setState({formComplete})
  },

  handleSubmit() {
    const { firstName, lastName, email, password, passwordConfirmation } = this.refs
    if (password.value === passwordConfirmation.value) {
      this.props.dispatch(registerUser({ 
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          password: password.value  
      }))
    } else {
      alert('Passwords do not match')
    }
  },

  render() {
    const { switchVisible } = this.props
    const { formComplete } = this.state

    return (
      <div className='entry--box signup'>
        <h3>Signup</h3>
        <form>
          <div className='column'>
            <input onChange={this.checkFormComplete} ref='firstName' type='text' placeholder='first' />
            <input onChange={this.checkFormComplete} ref='lastName' type='text' placeholder='last'/>
            <input  onKeyUp={this.checkFormComplete} ref='email' type='email' placeholder='email'/>
          </div>
          <div className='column'>
            <input  onKeyUp={this.checkFormComplete} ref='password' type='password' placeholder='password' />
            <input  onKeyUp={this.checkFormComplete} ref='passwordConfirmation' type='password' placeholder='confirm password' />
          </div>
        </form>
        <button className='submit' onClick={this.handleSubmit} disabled={!formComplete}>Submit</button>
        <p>Already have an account? Log in<button onClick={switchVisible}>here</button>.</p>
      </div>
    )
  }
})

export default connect()(Signup)
