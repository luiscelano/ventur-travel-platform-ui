import React from 'react'
import * as styles from './styles'
import Typography from 'src/components/Typography'
import InfoField from 'src/components/userInfo'
import { getProfile } from 'src/utils/storage'

const Profile = () => {
  const user = getProfile()
  return (
    <>
      <styles.Contenido>
        <Typography type="title" color="dark">
          Perfil
        </Typography>
        <Typography type="paragraph2">Información del usuario</Typography>
        <InfoField size="large" color="background1">permiso: {user.permiso.descripcion}</InfoField>
        <InfoField size="large" color="background2">nombre completo: {user.nombre} {user.apellido}</InfoField>
        <InfoField size="large" color="background1">correo: {user.correo}</InfoField>
        <InfoField size="large" color="background2">fecha de ingreso: {user.fechaIngreso}</InfoField>
        
      </styles.Contenido>
    </>
  )
}

export default Profile
