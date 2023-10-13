import React from 'react'
import * as styles from './styles'
import { NavLink, useNavigate } from 'react-router-dom'
import Typography from 'src/components/Typography'
import httpClient from 'src/utils/httpClient'
import { getRefreshToken } from 'src/utils/storage'

const LogoutButton = () => {
  const navigate = useNavigate()
  const logout = async () => {
    await httpClient.delete('/auth/logout', {
      data: {
        token: getRefreshToken()
      }
    })
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('profile')
    return navigate('/auth')
  }
  return (
    <>
      <styles.LogoutButtonContainer onClick={logout}>
        <Typography type="paragraph1" size="small">
          Cerrar Sesión
        </Typography>
      </styles.LogoutButtonContainer>
    </>
  )
}

export default LogoutButton
