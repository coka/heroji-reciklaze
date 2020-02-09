/******************************************************************************/
/********** Izvini Dile, bilo je previše fajlova za moj mali ekran. ***********/
/******************************************************************************/

import { Alert } from 'react-native'
import { put, select, takeEvery, takeLatest } from 'redux-saga/effects'
import { appStartFailure, appStartSuccess, fetchResources } from './actions'
import { authorizedGet, get, post } from './api'

const getToken = state => state.auth.token

export function* appInitializationSaga() {
  yield takeLatest('APP_START', function* appInitialization() {
    try {
      yield put(fetchResources())
      yield put(appStartSuccess())
    } catch (error) {
      Alert.alert('Greška', 'Desila se greška prilikom pokretanja aplikacije.')
      yield put(appStartFailure(error))
    }
  })
}

export function* pickupRetrievalSaga() {
  yield takeLatest('FETCH_PICKUPS', function* pickupRetrieval() {
    const token = yield select(getToken)
    const { pickups } = yield authorizedGet('/pickup', token)
    yield put({ type: 'FETCH_PICKUPS_SUCCESS', pickups })
  })
}

export function* resourceFetchingSaga() {
  yield takeLatest('FETCH_RESOURCES', function* resourceFetching() {
    try {
      const resources = yield get('/resource')
      yield put({ type: 'FETCH_RESOURCES_SUCCESS', resources })
    } catch (error) {
      yield put({ type: 'FETCH_RESOURCES_FAILURE', error })
      throw error
    }
  })
}

export function* loginSaga() {
  yield takeEvery('LOG_IN', function* logIn({ email, password }: any) {
    const response = yield post('/user/login', {
      email,
      password,
    })
    const token = response?.session?.sessionId
    if (token) {
      yield put({ type: 'LOGIN_SUCCESS', token })
      yield put({ type: 'FETCH_PICKUPS' })
    }
  })
}
