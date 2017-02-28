import { 
  ADD_WORKOUT,
  ADD_ROUTINE
  // UPDATE_WORKOUT,
  // REMOVE_WORKOUT
} from 'actions'

let DEFAULT_STATE = {
  newWorkout: {
    routines: [],
    _user: ''
  },
  workouts: []
}

const addWorkout = (state, action) => {
  return { ...state, workouts: [state.workouts, ...state.newWorkout] }
}

const addRoutine = (state, action) => {
  const newRoutines = [...state.newWorkout.routines, action.routine]
  console.log(newRoutines)
  const newWorkout = {...state.newWorkout, routines: newRoutines}
  return { ...state, newWorkout }

}

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case ADD_WORKOUT:
      return addWorkout(state, action)
    case ADD_ROUTINE:
      return addRoutine(state, action)
    default:
      return state
  }
}
