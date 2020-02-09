import createReducer from '../createReducerHelper'

interface AppState {
  pickups: Array<{}>
}

const initialState: AppState = {
  pickups: [],
}

export default createReducer(initialState, {
  FETCH_PICKUPS_SUCCESS: (state, { pickups }) => ({
    ...state,
    pickups,
  }),
})
