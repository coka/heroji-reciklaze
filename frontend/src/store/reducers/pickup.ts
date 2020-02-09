import createReducer from '../createReducerHelper'

const initialState = {
  loading: false,
  pickups: [],
  error: null,
}

export default createReducer(initialState, {
  FETCH_PICKUPS: state =>
    ({
      ...state,
      loading: true,
    } as const),
})
