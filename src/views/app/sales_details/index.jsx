import React from 'react'
import * as styles from './styles';
import Typography from 'src/components/Typography';
import Tabla_detalle from 'src/components/tabla_detalle'

const Sales = () => {
  return (
    <>
      <styles.Contenido>
        <Typography type='title'>Detalle de Ventas</Typography>
        <styles.vendedor><Typography type='paragraph1'>Vendedor</Typography></styles.vendedor>
        <styles.cliente><Typography type='paragraph1'>Cliente</Typography></styles.cliente>
        <Tabla_detalle></Tabla_detalle>
      </styles.Contenido>
    </>
  )
}

export default Sales
