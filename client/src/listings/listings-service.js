import { config, jwt } from '../api-util'
import { getAll, getBy } from './listings-stub'

const fake = true

export const all = async () => {
  if (fake) {
    return await getAll()
  }
  else {
    return await fetch(`${config.apiUrl}/listings/`, {
      method: 'GET',
      headers: jwt()
    })
  }
}

export const get = async (id) => {
  if (fake) {
    return await getBy(id)
  }
  else {
    return await fetch(`${config.apiUrl}/listings/${id}`, {
      method: 'GET',
      headers: jwt()
    })
  }
}