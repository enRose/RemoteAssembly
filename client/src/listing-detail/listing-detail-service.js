import { config, jwt } from '../api-util'
import { getBy } from '../listings/listings-stub'

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