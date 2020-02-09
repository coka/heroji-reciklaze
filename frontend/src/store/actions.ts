export const appStart = () =>
  ({
    type: 'APP_START',
  } as const)

export const appStartSuccess = () =>
  ({
    type: 'APP_START_SUCCESS',
  } as const)

export const appStartFailure = (error: string) =>
  ({
    type: 'APP_START_FAILURE',
    error,
  } as const)

export const fetchResources = () =>
  ({
    type: 'FETCH_RESOURCES',
  } as const)

export const logIn = (email: string, password: string) =>
  ({
    type: 'LOG_IN',
    email,
    password,
  } as const)
