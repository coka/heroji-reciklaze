import { get } from '.'

export const getResource = async payload => {
  try {
    const response = await get('/resource')
    return await response.json()
  } catch (error) {
    console.log('%c!DEBUG!%c error: %o', 'background-color:#f80;', '', error)
  }
}
