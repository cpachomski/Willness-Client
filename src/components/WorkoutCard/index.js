import React from 'react'
import RoutineCard from 'components/RoutineCard'

const WorkoutCard = React.createClass({

  formatTime(time) {
    const locale = navigator.language
    const date = new Date(time)
    return date.toLocaleString(locale, { month: 'long', day: 'numeric', year: 'numeric'})
  },

  render() {
    const { createdAt, routines } = this.props
    return (
      <div className='workout-card'>        
        <p className='workout-card--date'>{this.formatTime(createdAt)}</p>
        {routines.map((routine) => {
          return <RoutineCard key={routine.name} {...routine} />
        })}
      </div>
    )
  }
 })

export default WorkoutCard

