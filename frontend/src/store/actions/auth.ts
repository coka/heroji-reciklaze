export const login = payload =>
  ({
    type: 'LOGIN',
    payload,
  } as const)
