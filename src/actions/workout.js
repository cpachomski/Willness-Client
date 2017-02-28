import {
  ADD_WORKOUT,
  ADD_ROUTINE,
  UPDATE_WORKOUT,
  REMOVE_WORKOUT
} from './'

export function addWorkout(workout) {
  return {
    type: ADD_WORKOUT,
    workout
  }
}

export function addRoutine(routine) {
  return {
    type: ADD_ROUTINE,
    routine
  }
}
