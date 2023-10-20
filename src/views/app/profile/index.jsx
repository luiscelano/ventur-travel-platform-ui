import React from 'react'
import * as styles from './styles'
import Typography from 'src/components/Typography'
import info from 'src/components/userInfo'
import Button from 'src/components/Button'
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
        <info size="large" color="background1">{user.permiso.descripcion}</info>
        <info size="large" color="background2">nombre completo: {user.nombre} {user.apellido}</info>
        <info size="large" color="background1">correo: {user.correo}</info>
        <info size="large" color="background2">fecha de ingreso: {user.fechaIngreso}</info>
        
        {/* <section>
          <Field size="large" color="background2" placeholder="Nueva Contraseña"></Field>
          <Button size="small" color="background1">
            CAMBIAR
          </Button>
        </section> */}
      </styles.Contenido>
    </>
  )
}

export default Profile
