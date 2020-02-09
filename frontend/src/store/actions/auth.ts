export const logIn = (email: string, password: string) =>
  ({
    type: 'LOG_IN',
    email,
    password,
  } as const)

export const logInSuccess = ({ token, user }) =>
  ({
    type: 'LOG_IN_SUCCESS',
    token,
    user,
  } as const)

export const logInFailure = (error: Error) =>
  ({
    type: 'LOG_IN_FAILURE',
    error,
  } as const)

export const register = payload =>
  ({
    type: 'REGISTER',
    payload,
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

export const logOut = () =>
  ({
    type: 'LOG_OUT',
  } as const)
