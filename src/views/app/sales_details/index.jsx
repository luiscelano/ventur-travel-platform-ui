import React from 'react'
import * as styles from './styles';
import Typography from 'src/components/Typography';
import Tabla_detalle from 'src/components/tabla_detalle'
import withSales from 'src/containers/sales/withSales'

const Sales = (props) => {
  console.log('sales', props.sales)
  return (
    <>
      <styles.Contenido>
        <Typography type='title'>Detalle de Ventas</Typography>
        <styles.vendedor><Typography type='paragraph1'>Vendedor: </Typography></styles.vendedor>
        <styles.cliente><Typography type='paragraph1'>Cliente</Typography></styles.cliente>
        <Tabla_detalle sales={props.sales}></Tabla_detalle>
      </styles.Contenido>
    </>
  )
}

export default withSales(Sales)
