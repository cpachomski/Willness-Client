import { 
  SET_USER_WORKOUTS,
  CLEAR_NEW_WORKOUT,
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

const setUserWorkouts = (state, action) => {
  const { workouts } = action
  return {...state, workouts}
}

const clearNewWorkout = (state) => {
  return {...state, newWorkout: {_user: '', routines: []}}
}

const addWorkout = (state, action) => {
  const { newWorkout } = action
  return { ...state, workouts: [ ...state.workouts, newWorkout]}
}

const addRoutine = (state, action) => {
  const newRoutines = [...state.newWorkout.routines, action.routine]
  const newWorkout = {...state.newWorkout, routines: newRoutines}
  return { ...state, newWorkout }

}

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_USER_WORKOUTS:
      return setUserWorkouts(state, action)
    case CLEAR_NEW_WORKOUT:
      return clearNewWorkout(state)
    case ADD_WORKOUT:
      return addWorkout(state, action)
    case ADD_ROUTINE:
      return addRoutine(state, action)
    default:
      return state
  }
}
