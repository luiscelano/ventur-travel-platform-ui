import { redirect } from 'react-router-dom'
import { getIsAuthenticated } from 'src/utils/storage'

function redirectIfAuthenticated() {
  const isAuthenticated = getIsAuthenticated()

  if (!isAuthenticated) return redirect('/auth')

  return null
}

export default redirectIfAuthenticated
