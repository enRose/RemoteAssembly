export const jwt = () => {
  let user = JSON.parse(localStorage.getItem('user'))

  if (user && user.token) {
    return { 'Authorization': 'Bearer ' + user.token }
  } 

  return {}
}

export const config = {
  apiUrl: 'http://localhost:4000'
}