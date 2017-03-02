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
    const { toggleRoutineForm } = this.props
    
    this.props.dispatch(addRoutine({
      name: name.value,
      reps: reps.value,
      sets: sets.value,
      weight: weight.value
    }))

    this.cleanInputs()
    toggleRoutineForm()
  },

  render() {
    return (
      <form className='routine-form modal' onSubmit={this.handleSubmit}>
        <div className='modal-inputs'>
          <h5>Add Routine</h5>
          <input type='text' ref='name' placeholder='name' />
          <input type='number' ref='reps' placeholder='reps' />
          <input type='number' ref='sets' placeholder='sets' />
          <input type='number' ref='weight' placeholder='weight' />
        </div>
        <div className='modal-buttons'>
          <input type='submit' value='Add to workout' />
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
