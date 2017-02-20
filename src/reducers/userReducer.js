import { SET_LOGIN_STARTED, SET_USER } from 'actions'

const DEFAULT_STATE = {
  loginStarted: false,
  user: {}
}

const setUser = (state, action) => {
  return { ...state, user: action.user, loginSuccess: true }
}

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_LOGIN_STARTED: 
      return { ...state, loginStarted: true }
    case SET_USER:
      return setUser(state, action)
    default:
      return state
  }
}
