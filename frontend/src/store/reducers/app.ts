import createReducer from '../createReducerHelper'

interface AppState {}

const initialState: AppState = {
  loading: true,
}

export default createReducer(initialState, {
  APP_START_SUCCESS: () => ({
    loading: false,
  }),
})
