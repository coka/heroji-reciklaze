import createReducer from '../createReducerHelper'

const initialState = {
  loading: false,
  pickups: [],
  error: null,
  added: false,
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
  CREATE_PICKUP: state => ({
    ...state,
    added: false,
  }),
  CREATE_PICKUP_SUCCESS: (state, { pickup }) => ({
    ...state,
    pickups: [pickup, ...state.pickups],
    added: true,
  }),
  CREATE_PICKUP_FAILURE: (state, { error }) => ({
    ...state,
    error,
  }),
  ACCEPT_PICKUP: (state, { id }) => {
    const pickups = [...state.pickups]
    pickups.find(pickup => pickup.id === id).status = 2

    return {
      ...state,
      pickups,
    }
  },
  DECLINE_PICKUP: (state, { id }) => {
    const pickups = [...state.pickups]
    pickups.filter(pickup => pickup.id !== id)

    return {
      ...state,
      pickups,
    }
  },
})
