import { takeLatest, put, all, select } from 'redux-saga/effects'
import {
  logInSuccess,
  logInFailure,
  fetchUserSuccess,
  fetchUserFailure,
} from '../actions/auth'
import { fetchPickups } from '../actions/pickup'
import { post, authorizedGet } from '../api'
import { AsyncStorage } from 'react-native'

const selectToken = ({ auth }) => auth.token

function* logIn({ email, password }: any) {
  try {
    const response = yield post('/user/login', {
      email,
      password,
    })

    const token = response?.session?.sessionId

    if (token) {
      yield AsyncStorage.setItem('token', token)
      yield put(logInSuccess(token))
      yield put(fetchPickups())
    }
  } catch (error) {
    yield put(logInFailure(error))
  }
}

function* registerProvider(payload: {}) {
  try {
    const response = yield post('/user/register', payload)
  } catch (error) {}
}

function* fetchUser() {
  try {
    const token = yield select(selectToken)
    const user = yield authorizedGet('/user', token)
    yield put(fetchUserSuccess(user))
  } catch (error) {
    yield put(fetchUserFailure(error))
  }
}

export default function* authSaga() {
  yield all([
    takeLatest('LOG_IN', logIn),
    takeLatest('REGISTER_PROVIDER', registerProvider),
    takeLatest('FETCH_USER', fetchUser),
  ])
}
