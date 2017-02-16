import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const logger = createLogger()

export default (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger)
  )
}
