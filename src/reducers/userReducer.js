import { SET_LOGIN_STARTED, SET_USER, SET_TOKEN } from 'actions'

let DEFAULT_STATE = { loading: false, token: null}

if (localStorage) {
  const userData = JSON.parse(localStorage.getItem('willnessUser'))
  if (userData) {
    DEFAULT_STATE = { ...userData }
  } 
}

const setUser = (state, action) => {
  return { ...state, ...action.payload }
}

const setToLocalStorage = (user) => {
  if(localStorage) {
    localStorage.setItem('willnessUser', JSON.stringify(user))
  }
}

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_LOGIN_STARTED: 
      return { ...state, loading: true }
    case SET_USER:
      const newUserState = setUser(state, action)
      setToLocalStorage(newUserState)
      return newUserState
    case SET_TOKEN:
      return { ...state, token: action.token}
    default:
      return state
  }
}
