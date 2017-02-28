import view from './viewReducer'
import user from './userReducer'
import workout from './workoutReducer'
import routine from './routineReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  view,
  user,
  workout,
  routine
})

export default rootReducer
