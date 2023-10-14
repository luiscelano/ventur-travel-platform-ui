import React from 'react'
import * as styles from './styles'
import Button from 'src/components/Button'
import Typography from 'src/components/Typography'
import Tabla_cartera from 'src/components/tabla_cartera'
import Filtros from 'src/components/filtros'
import { Link } from 'react-router-dom'
import withSales from 'src/containers/sales/withSales'
import Goal from 'src/components/displaygoal'

const Sales = (props) => {
  console.log('sales', props.sales)
  console.log('metas', props.metas)
  return (
    <>
      <styles.Contenido>
        <Typography type="title">Cartera</Typography>
        <Typography type="paragraph2">Visualiza las metas realizadas durante el mes</Typography>
        <Goal metas={props.metas}></Goal>
        <styles.botones>
          <Filtros></Filtros>
        </styles.botones>
        <Link to='/app/AddSales'>
            <Button>Agregar nueva venta</Button>
        </Link>
        <Tabla_cartera sales={props.sales}></Tabla_cartera>
      </styles.Contenido>
    </>
  )
}

export default withSales(Sales)
