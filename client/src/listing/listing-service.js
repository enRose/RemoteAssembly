import { config, jwt } from '../api-util'
import { fetchAllListings } from './stub'

const fake = true

export const all = async () => {
  if (fake) {
    return await fetchAllListings()
  }
  else {
    return await fetch(`${config.apiUrl}/listings/`, {
      method: 'GET',
      headers: jwt()
    })
  }
}