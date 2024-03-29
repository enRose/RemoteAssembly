import { config, jwt } from '../api-util'
import { getBy } from './stub/listing-detail-stub'

const fake = true

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