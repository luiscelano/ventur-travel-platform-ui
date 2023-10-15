import React from 'react'
import * as styles from './styles'
import Typography from 'src/components/Typography'
import Button from '../Button'
import { useNavigate } from 'react-router'

const Error = ({ message, status }) => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('profile')
    return navigate('/auth')
  }
  if (status === 403)
    return (
      <>
        <styles.ErrorContainer>
          <Typography type="paragraph1">{message}</Typography>
          <Button onClick={logout} color="background1">
            Iniciar sesión
          </Button>
        </styles.ErrorContainer>
      </>
    )
  return (
    <>
      <styles.ErrorContainer>
        <Typography type="paragraph1">{message}</Typography>
      </styles.ErrorContainer>
    </>
  )
}

export default Error
