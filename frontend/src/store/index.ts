import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import appReducer from "./reducers/app"
import createSagaMiddleware from "redux-saga"
import appSaga from "./saga/app"
import logger from "redux-logger"

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
  app: appReducer,
})

const middlewares = [sagaMiddleware]

if (__DEV__) middlewares.push(logger)

const composedEnhancers = compose(applyMiddleware(...middlewares))

export default createStore(rootReducer, {}, composedEnhancers)

sagaMiddleware.run(appSaga)
