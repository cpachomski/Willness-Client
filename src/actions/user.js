import request from 'superagent'
import {
  SET_LOGIN_STARTED,
  SET_USER
} from 'actions'


function setLoginStarted() {
  return {
    type: SET_LOGIN_STARTED
  }
}

function setUser(payload) {
  return {
    type: SET_USER,
    payload
  }
}

export function loginUser(payload) {
  return function(dispatch) {
    dispatch(setLoginStarted())

    
  }
}
