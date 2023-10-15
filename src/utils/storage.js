// get localStorage
export const getAccessToken = () => localStorage.getItem('accessToken')
export const getRefreshToken = () => localStorage.getItem('refreshToken')
export const getProfile = () => JSON.parse(localStorage.getItem('profile'))
export const getIsAuthenticated = () => getAccessToken() && getRefreshToken()

// set localStorage
export const setAccessToken = (value) => localStorage.setItem('accessToken', value)
export const setRefreshToken = (value) => localStorage.setItem('refreshToken', value)
export const setProfile = (value) => localStorage.setItem('profile', JSON.stringify(value))
