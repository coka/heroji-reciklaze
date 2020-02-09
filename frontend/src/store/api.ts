export const URL = 'http://10.0.46.35:3000/api'

export const get = async (path, payload = {}) =>
  (await fetch(URL + path, payload)).json()

export const authorizedGet = async (path: string, token: string) =>
  (await fetch(URL + path, { headers: { Authorization: token } })).json()

export const post = async (path, payload = {}, token = '') =>
  (
    await fetch(URL + path, {
      method: 'POST',
      headers: { Authorization: token },
      body: JSON.stringify(payload),
    })
  ).json()

export const del = async (path, payload = {}, token = '') =>
  (
    await fetch(URL + path, {
      method: 'DELETE',
      headers: { Authorization: token },
      body: JSON.stringify(payload),
    })
  ).json()
