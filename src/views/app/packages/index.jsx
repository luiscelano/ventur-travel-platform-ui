import React from 'react'
import * as styles from './styles'
import Button from 'src/components/Button'
import Typography from 'src/components/Typography'
import Tabla_Paquetes from 'src/components/tabla_paquetes'
import withPackages from 'src/containers/packages/withPackages'

const Packages = (props) => {
  console.log('packages', props.packages)
  return (
    <>
      <styles.Contenido>
        <Typography type="title">Paquetes</Typography>
        <Typography type="paragraph2">Visualiza los paquetes</Typography>
        <hr />
        <Tabla_Paquetes paquetes={props.packages}></Tabla_Paquetes>
      </styles.Contenido>
    </>
  )
}

export default withPackages(Packages)