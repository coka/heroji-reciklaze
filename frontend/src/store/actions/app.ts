export const appStart = () =>
  ({
    type: 'APP_START',
  } as const)

export const appStartSuccess = () =>
  ({
    type: 'APP_START_SUCCESS',
  } as const)

export const appStartFailure = error =>
  ({
    type: 'APP_START_FAILURE',
    error,
  } as const)
