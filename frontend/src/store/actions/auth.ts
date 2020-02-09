export const logIn = (email: string, password: string) =>
  ({
    type: 'LOG_IN',
    email,
    password,
  } as const)

export const logInSuccess = (token: string) =>
  ({
    type: 'LOG_IN_SUCCESS',
    token,
  } as const)

export const logInFailure = (error: Error) =>
  ({
    type: 'LOG_IN_FAILURE',
    error,
  } as const)

export const registerProvider = () =>
  ({
    type: 'REGISTER_PROVIDER',
  } as const)

export const fetchUser = () =>
  ({
    type: 'FETCH_USER',
  } as const)

export const fetchUserSuccess = user =>
  ({
    type: 'FETCH_USER_SUCCESS',
    user,
  } as const)

export const fetchUserFailure = error =>
  ({
    type: 'FETCH_USER_FAILURE',
    error,
  } as const)
