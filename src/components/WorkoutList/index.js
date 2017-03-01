import React from 'react'
import { connect } from 'react-redux'
import WorkoutCard from 'components/WorkoutCard'
import { getUserWorkouts } from 'actions/actions'

const WorkoutList = React.createClass({

  componentDidMount() {
    const { token, dispatch } = this.props
    dispatch(getUserWorkouts(token))
  },

  render() {
    const { workouts } = this.props

    return (
      <div className='workout--list'>
        <h5>Workout List </h5>
        {workouts.map((workout) => {
          return <WorkoutCard key={workout._id} {...workout}/>
        })}
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return { 
    workouts: state.workout.workouts,
    token:  state.user.token
  }
}

export default connect(mapStateToProps)(WorkoutList)
