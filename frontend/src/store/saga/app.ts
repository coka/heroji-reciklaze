import { takeLatest } from 'redux-saga/effects'

function* appStart(action) {
  console.log('%c!DEBUG!%c action: %o', 'background-color:#f80;', '', action)
}

export default function*() {
  yield takeLatest('APP_START', appStart)
}
