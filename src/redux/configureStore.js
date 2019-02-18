import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import appsReducer from './reducers'

export default function configureStore(preloadedState) {
  return createStore(
    appsReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware),
  )
}