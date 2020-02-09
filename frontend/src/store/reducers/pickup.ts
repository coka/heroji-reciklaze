import createReducer from '../createReducerHelper'

const initialState = {
  loading: false,
  pickups: [],
  error: null,
}

export default createReducer(initialState, {
  FETCH_PICKUPS: state => ({
    ...state,
    loading: true,
  }),
  FETCH_PICKUPS_SUCCESS: (state, { pickups }) => ({
    ...state,
    pickups,
    loading: false,
  }),
})
