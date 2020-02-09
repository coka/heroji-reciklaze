import createReducerHelper from '../createReducerHelper'

interface AppState {
  pickups: Array<Pickup>
}

const initialState: AppState = {
  pickups: [],
}

export default createReducerHelper(initialState, {
  FETCH_PICKUPS_SUCCESS: (state, { pickups }) => ({
    ...state,
    pickups,
  }),
})
