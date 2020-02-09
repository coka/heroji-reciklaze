import { put, all, select, takeLatest } from 'redux-saga/effects'
import { authorizedGet, post, del } from '../api'
import {
  createPickupFailure,
  createPickupSuccess,
  acceptPickupSuccess,
  acceptPickupFailure,
  declinePickupSuccess,
  declinePickupFailure,
  deletePickupSuccess,
  deletePickupFailure,
} from '../actions/pickup'

const getToken = ({ auth }) => auth.token

function* fetchPickups() {
  const token = yield select(getToken)
  const response = yield authorizedGet('/pickup', token)
  if (response.error) throw new Error(response.error)

  const { pickups } = response

  yield put({ type: 'FETCH_PICKUPS_SUCCESS', pickups })
}

function* createPickup(action) {
  try {
    const token = yield select(getToken)
    const response = yield post('/pickup', action.payload, token)
    if (response.error) throw new Error(response.error)

    yield put(createPickupSuccess(response.pickup))
  } catch (error) {
    yield put(createPickupFailure(error))
  }
}

function* acceptPickup(action) {
  try {
    const token = yield select(getToken)
    const response = yield authorizedGet('/pickup/accept/' + action.id, token)
    if (response.error) throw new Error(response.error)

    yield put(acceptPickupSuccess(action.id))
  } catch (error) {
    yield put(acceptPickupFailure(error))
  }
}

function* declinePickup(action) {
  try {
    const token = yield select(getToken)
    const response = yield authorizedGet('/pickup/decline/' + action.id, token)
    if (response.error) throw new Error(response.error)

    yield put(declinePickupSuccess(action.id))
  } catch (error) {
    yield put(declinePickupFailure(error))
  }
}

function* deletePickup(action) {
  try {
    const token = yield select(getToken)
    const response = yield del('/pickup/' + action.id, token)
    if (response.error) throw new Error(response.error)

    yield put(deletePickupSuccess(action.id))
  } catch (error) {
    yield put(deletePickupFailure(error))
  }
}

export default function* pickupSaga() {
  yield all([
    takeLatest('FETCH_PICKUPS', fetchPickups),
    takeLatest('CREATE_PICKUP', createPickup),
    takeLatest('ACCEPT_PICKUP', acceptPickup),
    takeLatest('DECLINE_PICKUP', declinePickup),
    takeLatest('DELETE_PICKUP', deletePickup),
  ])
}
