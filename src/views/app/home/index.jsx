import React from 'react'
import * as styles from './styles'
import Typography from 'src/components/Typography'
import { getProfile } from 'src/utils/storage'
import Grafica from 'src/components/graphics'

const Home = () => {
  const user = getProfile()
  console.log('user ', user)
  return (
    <>
      <styles.Contenido>
        <Typography type="title" color="dark">Buen día, {user.nombre}</Typography>
        <styles.contenedor>
          <Grafica></Grafica>
        </styles.contenedor>
      </styles.Contenido>
    </>
  )
}

export default Home
