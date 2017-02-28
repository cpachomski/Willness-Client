import React from 'react'
import NavBar from 'components/NavBar'
import WorkoutForm from 'components/WorkoutForm'
import WorkoutList from 'components/WorkoutList'

const Workouts = React.createClass({

  render() {
    return (
      <div className='page workouts'>
        <NavBar />
        <div className='page--container'>
          <h1>Workouts</h1>
          <WorkoutForm />
          <WorkoutList/>
        </div>
      </div>
    )
  }
})

export default Workouts
