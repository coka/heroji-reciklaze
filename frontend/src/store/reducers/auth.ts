import createReducerHelper from '../createReducerHelper'

const initialState = {
  token: '',
  loading: true,
}

export default createReducerHelper(initialState, {
  LOGIN: state => ({
    ...state,
    loading: true,
  }),
  LOGIN_SUCCESS: (state, { token }) => ({
    ...state,
    loading: false,
    token,
  }),
  LOGIN_FAILURE: (state, { error }) => ({
    ...state,
    error,
  }),
})
