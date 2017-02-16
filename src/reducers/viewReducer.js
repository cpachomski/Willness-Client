import { SET_NAVBAR_LOADED } from '../actions'

const DEFAULT_STATE = {
  navBarLoaded: false
}

const setNavBarLoaded = (state) => {
  return {...state, navBarLoaded: true}
}

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_NAVBAR_LOADED:
      return setNavBarLoaded(state)
    default:
      return state
  }
}
