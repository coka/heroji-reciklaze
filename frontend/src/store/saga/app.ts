import { takeLatest, put } from 'redux-saga/effects'
import { fetchResources } from '../actions/resource'
import { appStartSuccess, appStartFailure } from '../actions/app'

function* appStart() {
  try {
    yield put(fetchResources())
    yield put(appStartSuccess())
  } catch (error) {
    console.log('%c!DEBUG!%c error: %o', 'background-color:#f80;', '', error)
    yield put(appStartFailure(error))
  }
}

export default function*() {
  yield takeLatest('APP_START', appStart)
}
