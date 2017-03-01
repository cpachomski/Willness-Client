import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import RoutineForm from 'components/RoutineForm'
import { pushWorkout } from 'actions/actions'

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
    const { userId, newWorkout, token } = this.props
   this.props.dispatch(pushWorkout({...newWorkout, _user: userId}, token))
  },

  render() {
    const { userId, newWorkout } = this.props
    const { routineFormVisible } = this.state
  
    const toggleButtonText = routineFormVisible ? 'Close' : 'Add Routine'
    const submitBtn = newWorkout.routines.length > 0 ? <button onClick={this.handleSubmit}>Submit Workout</button> : null

    return (
      <div className='workout-form'>
        <h3>Log a workout</h3>
        <Modal 
          isOpen={routineFormVisible}
          contentLabel="Routine Form"
          style={modalStyles}>
          <RoutineForm toggleRoutineForm={this.toggleRoutineForm}/>
        </Modal>
        <div className='btn--container'>
          <button onClick={this.clearRoutines}>Clear</button>
          
          <button onClick={this.toggleRoutineForm}>Add Routine</button>
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

const modalStyles = {
  content: {
    maxWidth: '400px',
    maxHeight: '400px',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.user._id,
    token: state.user.token,
    newWorkout: state.workout.newWorkout
  }
}

export default connect(mapStateToProps)(WorkoutForm)
