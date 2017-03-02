import React from 'react'

const RoutineCard = React.createClass({
  render() {

    const { _muscleGroups, name, reps, sets, weight} = this.props
    return (
      <div className='routine--card slideIn'>
        <h4 className='routine--name'>{name}</h4>
        <div className='routine--stats'>
          <p className='routine--reps'>
            <span>Reps</span>
            <span>
              <span>{reps}</span>
              x
            </span>
          </p>
          <p className='routine--sets'>
            <span>Sets</span>
            <span>
              <span>{sets}</span>
              x
            </span>
          </p>
          <p className='routine--weight'>
            <span>Weight</span> 
            <span>
              <span>{weight}</span> 
              lbs
            </span>
          </p>
        </div>
      </div>
    )
  }
})

export default RoutineCard
