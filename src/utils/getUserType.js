const { getProfile } = require('./storage')

const getUserType = () => {
  const profile = getProfile()

  return profile.permiso && profile.permiso.descripcion
}

export default getUserType
