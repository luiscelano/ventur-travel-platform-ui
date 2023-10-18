import React from 'react'
import { Contenido } from './styles'
import Typography from 'src/components/Typography'
import Field from 'src/components/Field'
import Button from 'src/components/Button'
import { getProfile } from 'src/utils/storage'

const Profile = () => {
  const user = getProfile()
  console.log('user ', user)
  return (
    <>
      <Contenido>
        <Typography type="title" color="dark">
          Perfil
        </Typography>
        <Typography type="paragraph2">Información del usuario</Typography>
        <Field type="disable" size="large" color="background1">tipo de usuario: {user.permiso.descripcion}</Field>
        <Field type="disable" size="large" color="background2">nombre completo: {user.nombre} {user.apellido}</Field>
        <Field type="disable" size="large" color="background1">correo: {user.correo}</Field>
        <Field type="disable" size="large" color="background2">fecha de ingreso: {user.fechaIngreso}</Field>
        
        {/* <section>
          <Field size="large" color="background2" placeholder="Nueva Contraseña"></Field>
          <Button size="small" color="background1">
            CAMBIAR
          </Button>
        </section> */}
      </Contenido>
    </>
  )
}

export default Profile
