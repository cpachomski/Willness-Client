import request from 'superagent'
import {
  SET_LOGIN_STARTED,
  SET_USER,
  SET_TOKEN
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

function setToken(token) {
  return {
    type: SET_TOKEN,
    token
  }
}

function getUser(dispatch, token) {
  request
    .get('api/users/me')
    .set({
      'Authorization': `Bearer ${token}`
    })
    .end((err, data) => {
      const userData = JSON.parse(data.text)
      dispatch(setUser(userData))
    })
}

export function registerUser(payload) {
  const { firstName, lastName, email, password } = payload
  return function(dispatch) {
    dispatch(setLoginStarted())

    request
      .post('api/users')
      .send({
        user: {
          firstName,
          lastName,
          email,
          password
        }
      })
      .end((err, data) => {
        if(err) { console.log(err) }
        const parsedData = JSON.parse(data.text)
        const user = parsedData._doc
        const token = parsedData.token
        dispatch(setToken(token))
        dispatch(setUser(user))
      })
  }
}

export function loginUser(payload) {
  const { email, password } = payload


  return function(dispatch) {
    dispatch(setLoginStarted())

    request
      .post('auth/signin')
      .send({
        user: {
          email,
          password
        }
      })
      .end((err, data) => {
        const { token } = JSON.parse(data.text)
        dispatch(setToken(token))
        getUser(dispatch, token)
      })
  }
}
