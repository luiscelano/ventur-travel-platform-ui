import React from 'react'
import {Contenido} from './styles'
import Typography from 'src/components/Typography'
import Field from 'src/components/Field'
import Button from 'src/components/Button'

const Profile = () => {
  return <>
    <Contenido>
      <Typography type="title" color="dark">Perfil, user</Typography>
      <Typography type="paragraph2">Información del usuario</Typography>
      <Field type="disable" size="large" color="background1"></Field>
      <Field type="disable" size="large" color="background2"></Field>
      <Field type="disable" size="large" color="background1"></Field>
      <section>
        <Field type="noDisable" size="large" color="background2" placeholder="Nueva Contraseña"></Field>
        <Button size="small" color="background1">CAMBIAR</Button>
      </section>
    </Contenido>
  </>
}

export default Profile