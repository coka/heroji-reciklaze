import { takeLatest, put, call } from 'redux-saga/effects'
import { getResource } from '../api/app'

function* fetchResources() {
  try {
    const resources = yield call(getResource)
    yield put({ type: 'FETCH_RESOURCES_SUCCESS', resources })
  } catch (error) {
    yield put({ type: 'FETCH_RESOURCES_FAILURE', error })
  }
}

export default function*() {
  yield takeLatest('FETCH_RESOURCES', fetchResources)
}
