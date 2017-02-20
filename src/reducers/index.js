import view from './viewReducer'
import user from './userReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  view,
  user
})

export default rootReducer
