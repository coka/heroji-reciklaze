import { takeLatest, put, call } from 'redux-saga/effects'
import { getResource } from '../api/app'

function* appStart(action) {
  try {
    yield put(fetchResources())
    put({ type: 'APP_START_SUCCESS' })
  } catch (error) {
    put({ type: 'APP_START_FAILURE', error })
  }
}

export default function*() {
  yield takeLatest('APP_START', appStart)
}
