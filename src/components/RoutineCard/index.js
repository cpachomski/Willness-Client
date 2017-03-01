import React from 'react'

const RoutineCard = React.createClass({
  render() {

    const { _muscleGroups, name, reps, sets, weight} = this.props
    return (
      <div className='routine--card'>
        <h4 className='routine--name'>{name}</h4>
        <p className='routine--reps'>Reps: {reps}</p>
        <p className='routine--sets'>Sets: {sets}</p>
        <p className='routine--weight'>Weight: {weight}</p>
      </div>
    )
  }
})

export default RoutineCard
