import React from 'react'
import { connect } from 'react-redux'
import RoutineForm from 'components/RoutineForm'
import { addWorkout } from 'actions/actions'

const WorkoutForm = React.createClass({

  getInitialState() {
    return {
      routineFormVisible: false
    }
  },
  
  clearRoutines() {
    alert('clear routines')
  },

  toggleRoutineForm() {
    this.setState({
      routineFormVisible: !this.state.routineFormVisible
    })
  },

  handleSubmit() {
    this.props.dispatch
  },

  render() {
    const { userId, newWorkout } = this.props
    const { routineFormVisible } = this.state
  
    const routineForm = routineFormVisible ? <RoutineForm /> : null
    const toggleButtonText = routineFormVisible ? 'Close' : 'Add Routine'

    const submitBtn = newWorkout.routines.length > 0 ? <button onClick={this.handleSubmit}>Submit Workout</button> : null
    return (
      <div className='workout-form'>
        <h3>Log a workout</h3>
        {routineForm}
        <div className='btn--container'>
          <button onClick={this.clearRoutines}>Clear</button>
          
          <button onClick={this.toggleRoutineForm}>{toggleButtonText}</button>
        </div>
        <div className='routines--list'>
          {newWorkout.routines.map((routine) => {
            return (
              <div key={routine.name}>
                <p>-----------------------------------------------------------</p>
                <p>Name: {routine.name}</p>
                <p>Reps: {routine.reps}</p>
                <p>Sets: {routine.sets}</p>
                <p>Weight: {routine.weight}</p>
                <p>-----------------------------------------------------------</p>
              </div>
            )
          })}
          {submitBtn}
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    userId: state.user._id,
    newWorkout: state.workout.newWorkout
  }
}

export default connect(mapStateToProps)(WorkoutForm)
