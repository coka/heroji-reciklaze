export const fetchPickups = () =>
  ({
    type: 'FETCH_PICKUPS',
  } as const)

export const fetchPickupsSuccess = () =>
  ({
    type: 'FETCH_PICKUPS_SUCCESS',
  } as const)

export const fetchPickupsFailure = () =>
  ({
    type: 'FETCH_PICKUPS_FAILURE',
  } as const)
