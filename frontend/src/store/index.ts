import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import appReducer from './reducers/app'
import authReducer from './reducers/auth'
import pickupReducer from './reducers/pickup'
import appSaga from './saga/app'
import authSaga from './saga/auth'
import pickupSaga from './saga/pickup'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  pickup: pickupReducer,
})

const middlewares = [sagaMiddleware]

if (__DEV__) middlewares.push(logger)

const composedEnhancers = compose(applyMiddleware(...middlewares))

export default createStore(rootReducer, {}, composedEnhancers)

sagaMiddleware.run(appSaga)
sagaMiddleware.run(authSaga)
sagaMiddleware.run(pickupSaga)
