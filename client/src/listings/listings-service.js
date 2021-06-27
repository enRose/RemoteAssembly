import { config, jwt } from '../api-util'
import { getAll } from './listings-stub'

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