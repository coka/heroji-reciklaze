export const fetchPickups = () =>
  ({
    type: 'FETCH_PICKUPS',
  } as const)

export const fetchPickupsSuccess = pickups =>
  ({
    type: 'FETCH_PICKUPS_SUCCESS',
    pickups,
  } as const)

export const fetchPickupsFailure = () =>
  ({
    type: 'FETCH_PICKUPS_FAILURE',
  } as const)

export const createPickup = payload =>
  ({
    type: 'CREATE_PICKUP',
    payload,
  } as const)

export const createPickupSuccess = pickup =>
  ({
    type: 'CREATE_PICKUP',
    pickup,
  } as const)

export const createPickupFailure = error =>
  ({
    type: 'CREATE_PICKUP',
    error,
  } as const)
