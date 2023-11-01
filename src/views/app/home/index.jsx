import React from 'react'
import * as styles from './styles'
import Typography from 'src/components/Typography'
import { getProfile } from 'src/utils/storage'
import Grafica from 'src/components/graphics'
import TopVendedor from 'src/components/topVendedores'
import TopPaquetes from 'src/components/topPaquetes'
import withSummary from 'src/containers/sales/withSummary'

const Home = (props) => {
  const { getSalesSummary } = props
  const user = getProfile()
  return (
    <>
      <styles.Contenido>
        <Typography type="title" color="dark">
          Buen día, {user.nombre}
        </Typography>
        <button onClick={getSalesSummary}>descargar reporte</button>
        <styles.contenedor>
          <Grafica></Grafica>
        </styles.contenedor>
        <styles.topInformacion>
          <TopPaquetes></TopPaquetes>
          <TopVendedor></TopVendedor>
        </styles.topInformacion>
      </styles.Contenido>
    </>
  )
}

export default withSummary(Home)
