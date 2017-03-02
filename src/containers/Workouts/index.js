import React from 'react'
import NavBar from 'components/NavBar'
import WorkoutForm from 'components/WorkoutForm'
import WorkoutList from 'components/WorkoutList'
import Modal from 'react-modal'

const Workouts = React.createClass({
  
  getInitialState() {
    return {
      workoutFormVisible: false
    }
  },

  toggleWorkoutForm() {
    this.setState({
      workoutFormVisible: !this.state.workoutFormVisible
    })
  },

  render() {
    const { workoutFormVisible } = this.state

    return (
      <div className='page workouts'>
        <NavBar />
        <div className='page--container row'>
          <div className='column'>
            <h1>Workouts</h1>
            <Modal
              isOpen={ workoutFormVisible }
              contentLabel="Workout Form"
              style={modalStyles}>
              <WorkoutForm toggleWorkoutForm={this.toggleWorkoutForm} />
            </Modal>
            <button onClick={this.toggleWorkoutForm} className='btn--bordered dark' data-hover-text='+'><span>Log Workout</span></button>
          </div>
          <div className='column'>
            <WorkoutList/>
          </div>
        </div>
      </div>
    )
  }
})

const modalStyles = {
  content: {
    minWidth: '900px',
    minHeight: '500px',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
  }
}

export default Workouts
