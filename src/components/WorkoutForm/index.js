import React from 'react'
import { connect } from 'react-redux'
import RoutineForm from 'components/RoutineForm'
import RoutineCard from 'components/RoutineCard'
import { pushWorkout } from 'actions/actions'

const WorkoutForm = React.createClass({

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
    const { userId, newWorkout, toggleWorkoutForm } = this.props
    const submitBtn = newWorkout.routines.length > 0 ? <button onClick={this.handleSubmit}>Submit Workout</button> : null

    const routineCards = newWorkout.routines.map((routine) => { return <RoutineCard {...routine} />})

    return (
      <div className='workout-form row'>
        <div className='column'>
          <h3>Log a workout</h3>
        
          <RoutineForm />
        </div>
        <div className='column space-between'>
          <div className=' routines--list'>
            {
              newWorkout.routines.length > 0 
              ?
                (routineCards)
              :
                (<div className='routines--list none'><p>Add routines to submit a workout.</p> </div>)
            }
          </div>
            {submitBtn}
        </div>
        <button className='button close' onClick={toggleWorkoutForm}>X</button>
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
