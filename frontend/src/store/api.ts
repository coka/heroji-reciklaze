export const URL = 'http://10.0.46.35:3000/api'

export const get = async (path, payload = {}) =>
  fetch(URL + path, payload).then(response => response.json())

export const authorizedGet = async (path: string, token: string) =>
  fetch(URL + path, {
    headers: {
      Authorization: token,
    },
  }).then(response => response.json())

export const post = async (path, payload = {}) =>
  fetch(URL + path, {
    method: 'POST',
    body: JSON.stringify(payload),
  }).then(response => response.json())
