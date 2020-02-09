import { takeLatest, put, all } from 'redux-saga/effects'
import { AsyncStorage } from 'react-native'
import {
  fetchResources,
  appStartSuccess,
  appStartFailure,
} from '../actions/app'
import { fetchUser } from '../actions/auth'
import { get } from '../api'

function* appStart() {
  try {
    const token = yield AsyncStorage.getItem('token')

    if (token) {
      yield put(fetchResources())

      yield put(appStartSuccess(token))
      yield put(fetchUser())
    } else {
    }
  } catch (error) {
    yield put(appStartFailure(error))
  }
}

function* fetchResourceSaga() {
  try {
    const resources = yield get('/resource')
    yield put({ type: 'FETCH_RESOURCES_SUCCESS', resources })
  } catch (error) {
    yield put({ type: 'FETCH_RESOURCES_FAILURE', error })
    throw error
  }
}

export default function* appSaga() {
  yield all([
    takeLatest('APP_START', appStart),
    takeLatest('FETCH_RESOURCES', fetchResourceSaga),
  ])
}
