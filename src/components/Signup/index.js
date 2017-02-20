import React from 'react'

const Signup = React.createClass({

  getInitialState() {

    return {
      formComplete: false
    }
  },

  checkFormComplete() {
    const { firstName, lastName, username, email, password, passwordConfirmation } = this.refs
    const emailReg = /\S+@\S+\.\S+/
    let formComplete

    if (
      emailReg.test(email.value) &&
      password.value === passwordConfirmation.value &&
      firstName.value !== undefined &&
      lastName.value !== undefined &&
      username.value !== undefined &&
      password.value !== undefined &&
      password.value.length > 0 &&
      passwordConfirmation.value.length > 0 &&
      passwordConfirmation.value !== undefined) { 
        formComplete = true
    } else {
        formComplete = false
    }

    this.setState({formComplete})
  },

  handleSubmit() {
    console.log('yo')
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
            <input onChange={this.checkFormComplete} ref='username' type='text' placeholder='username' />
          </div>
          <div className='column'>
            <input  onKeyUp={this.checkFormComplete} ref='email' type='email' placeholder='email'/>
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

export default Signup
