import React from 'react'
import { connect } from 'react-redux'
import { addRoutine } from 'actions/actions'

const RoutineForm = React.createClass({

  cleanInputs() {
    Object.keys(this.refs).forEach((key) => {
      this.refs[key].value = ""
    })
  },

  handleSubmit(e) {
    e.preventDefault()
    const { name, reps, sets, weight } = this.refs
    
    this.props.dispatch(addRoutine({
      name: name.value,
      reps: reps.value,
      sets: sets.value,
      weight: weight.value
    }))

    this.cleanInputs()
  },

  render() {
    return (
      <form className='routine-form' onSubmit={this.handleSubmit}>
        <h5>Routine Form</h5>
        <input type='text' ref='name' placeholder='name' />
        <input type='number' ref='reps' placeholder='reps' />
        <input type='number' ref='sets' placeholder='sets' />
        <input type='number' ref='weight' placeholder='weight' />
        
        <div>
          <input type='submit' value='submit' />
        </div>
      </form>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    newRoutine: state.routine.newRoutine
  }
}

export default connect()(RoutineForm)