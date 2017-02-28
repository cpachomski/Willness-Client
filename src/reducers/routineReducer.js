import {
  ADD_ROUTINE
} from 'actions'

const DEFAULT_STATE = {
  newRoutine: {}
}

const addRoutine = (state, action) => {
  return { ...state, newRoutine: action.routine}
}

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case ADD_ROUTINE:
      return addRoutine(state, action)
    default:
      return state
  }
}
