import createReducerHelper from '../createReducerHelper'

const initialState = {}

export default createReducerHelper(initialState, {
  APP_START: state => state,
})
