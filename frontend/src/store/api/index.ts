export const URL = 'http://10.0.46.35:3000/api'

export const get = async (path, payload = {}) => fetch(URL + path, payload)
