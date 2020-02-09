import createReducer from '../createReducerHelper'

interface AuthState {
  token: string
  loading: boolean
  error: object
}

const initialState = {
  token: '',
  loading: true,
  error: null,
}

export default createReducer(initialState, {
  APP_START_SUCCESS: (state, { token }) => ({
    ...state,
    token,
  }),
  LOG_IN: state =>
    ({
      ...state,
      loading: true,
    } as const),
  LOG_IN_SUCCESS: (state, { token }) =>
    ({
      ...state,
      loading: false,
      token,
    } as const),
  LOG_IN_FAILURE: (state, { error }) =>
    ({
      ...state,
      error,
    } as const),
  REGISTER_PROVIDER: state =>
    ({
      ...state,
    } as const),
  REGISTER_PROVIDER_SUCCESS: (state, { token }) =>
    ({
      ...state,
      token,
    } as const),
  REGISTER_PROVIDER_FAILURE: (state, { error }) =>
    ({
      ...state,
      error,
    } as const),
})
