import React from 'react'
import { connect } from 'react-redux'
import RoutineForm from 'components/RoutineForm'

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
    console.log('open routine form')

    this.setState({
      routineFormVisible: !this.state.routineFormVisible
    })
  },

  render() {
    const { userId } = this.props
    const { routineFormVisible } = this.state

    const routineForm = routineFormVisible ? <RoutineForm /> : null

    return (
      <div className='workout-form'>
        <h3>Log a workout</h3>
        <div className='routines--list'>
        </div>
        {routineForm}
        <div className='btn--container'>
          <button onClick={this.clearRoutines}>Clear</button>
          <button onClick={this.toggleRoutineForm}>Add Routine</button>
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    userId: state.user._id
  }
}

export default connect(mapStateToProps)(WorkoutForm)
