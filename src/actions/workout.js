import request from 'superagent'
import {
  SET_USER_WORKOUTS,
  ADD_WORKOUT,
  CLEAR_NEW_WORKOUT,
  ADD_ROUTINE,
  UPDATE_WORKOUT,
  REMOVE_WORKOUT
} from './'

export function pushWorkout(workout, token) {
  return function(dispatch) {
    request
      .post('/api/workouts')
      .set({
        'Authorization': `Bearer ${token}`
      })
      .send({
        workout
      })
      .end((err, data) => {
        if (err) { console.log(err) }
        const newWorkout = JSON.parse(data.text);

        dispatch(addWorkout(newWorkout))
        dispatch(clearNewWorkout())
      })
  }
}

export function getUserWorkouts(token) {
  return function(dispatch) {
    request
      .get('/api/workouts')
      .set({
        'Authorization': `Bearer ${token}`
      })
      .end((err, data) => {
        if(err) { console.log(err) }
        const workouts = JSON.parse(data.text)
        dispatch(setUserWorkouts(workouts))
      })
  }
}

function setUserWorkouts(workouts) {
  return {
    type: SET_USER_WORKOUTS,
    workouts
  }
}

function clearNewWorkout() {
  return {
    type: CLEAR_NEW_WORKOUT
  }
}

function addWorkout(newWorkout) {
  return {
    type: ADD_WORKOUT,
    newWorkout
  }
}


export function addRoutine(routine) {
  return {
    type: ADD_ROUTINE,
    routine
  }
}
  
