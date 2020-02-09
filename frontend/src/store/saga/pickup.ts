import { put, all, select, takeLatest } from 'redux-saga/effects'
import { authorizedGet } from '../api'

const getToken = ({ auth }) => auth.token

function* fetchPickups() {
  const token = yield select(getToken)
  const { pickups } = yield authorizedGet('/pickup', token)

  yield put({ type: 'FETCH_PICKUPS_SUCCESS', pickups })
}

export default function* pickupSaga() {
  yield all([takeLatest('FETCH_PICKUPS', fetchPickups)])
}
