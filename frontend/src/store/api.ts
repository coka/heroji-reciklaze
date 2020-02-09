export const URL = 'http://10.0.46.35:3000/api'

export const get = async (path, payload = {}) =>
  (await fetch(URL + path, payload)).json()

export const authorizedGet = async (path: string, token: string) =>
  (await fetch(URL + path, { headers: { Authorization: token } })).json()

export const post = async (path, payload = {}) =>
  (
    await fetch(URL + path, { method: 'POST', body: JSON.stringify(payload) })
  ).json()
