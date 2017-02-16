import React from 'react'
import NavBar from 'components/NavBar'

const Workouts = React.createClass({

  render() {
    return (
      <div className='workouts'>
        <NavBar />
        <h1>Workouts</h1>
      </div>
    )
  }
})

export default Workouts
