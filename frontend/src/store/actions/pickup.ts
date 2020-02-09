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
    type: 'CREATE_PICKUP_SUCCESS',
    pickup,
  } as const)

export const createPickupFailure = error =>
  ({
    type: 'CREATE_PICKUP_FAILURE',
    error,
  } as const)

export const acceptPickup = id =>
  ({
    type: 'ACCEPT_PICKUP',
    id,
  } as const)

export const acceptPickupSuccess = id =>
  ({
    type: 'ACCEPT_PICKUP_SUCCESS',
    id,
  } as const)

export const acceptPickupFailure = error =>
  ({
    type: 'ACCEPT_PICKUP_FAILURE',
    error,
  } as const)

export const declinePickup = id =>
  ({
    type: 'DECLINE_PICKUP',
    id,
  } as const)

export const declinePickupSuccess = id =>
  ({
    type: 'DECLINE_PICKUP_SUCCESS',
    id,
  } as const)

export const declinePickupFailure = error =>
  ({
    type: 'DECLINE_PICKUP_FAILURE',
    error,
  } as const)

export const deletePickup = id =>
  ({
    type: 'DELETE_PICKUP',
    id,
  } as const)

export const deletePickupSuccess = id =>
  ({
    type: 'DELETE_PICKUP_SUCCESS',
    id,
  } as const)

export const deletePickupFailure = error =>
  ({
    type: 'DELETE_PICKUP_FAILURE',
    error,
  } as const)
