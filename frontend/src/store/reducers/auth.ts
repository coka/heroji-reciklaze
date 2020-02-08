import { createReducer } from '.'
const initialState = {
  token: '',
  loading: true,
}
export default createReducer(initialState, {
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
