import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import appReducer from './reducers/app'
import authReducer from './reducers/auth'
import * as sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
})

const middlewares = [sagaMiddleware]

if (__DEV__) middlewares.push(logger)

const composedEnhancers = compose(applyMiddleware(...middlewares))

export default createStore(rootReducer, {}, composedEnhancers)

sagaMiddleware.run(sagas.appInitializationSaga)
sagaMiddleware.run(sagas.resourceFetchingSaga)
sagaMiddleware.run(sagas.loginSaga)
