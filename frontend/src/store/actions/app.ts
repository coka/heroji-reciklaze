export const appStart = () =>
  ({
    type: 'APP_START',
  } as const)

export const appStartSuccess = token =>
  ({
    type: 'APP_START_SUCCESS',
    token,
  } as const)

export const appStartFailure = (error: Error) =>
  ({
    type: 'APP_START_FAILURE',
    error,
  } as const)

export const fetchResources = () =>
  ({
    type: 'FETCH_RESOURCES',
  } as const)
