import React from 'react'
import * as styles from './styles'
import Button from 'src/components/Button'
import Typography from 'src/components/Typography'
import Filtros from 'src/components/filtros'
import { Link } from 'react-router-dom'
//import withGoals from 'src/containers/goals/withGoals'
import withSales from 'src/containers/sales/withSales'
import Goal from 'src/components/displaygoal'
import getUserType from 'src/utils/getUserType'
import userTypes from 'src/utils/userTypes'

const Sales = (props) => {
  const userType = getUserType()
    if (userType === userTypes.administrador || userType === userTypes.jefe) {
        console.log('puede ver vendedor')
    }else{
        console.log('no puede ver vendedor')
    }
  console.log('sales', props.sales)
  console.log('metas', props.metas)
  console.log('paquetes', props.paquetes)
  return (
    <>
      <styles.Contenido>
        <Typography type="title" color='dark'>Cartera</Typography>
        <Typography type="paragraph2">Visualiza las metas realizadas durante el mes</Typography>
        <Goal sales={props.metas}></Goal>
        <Link to='/app/AddSales'>
            <Button>Agregar nueva venta</Button>
        </Link>
        <styles.botones>
          <Filtros></Filtros>
        </styles.botones>
      </styles.Contenido>
    </>
  )
}

export default withSales(Sales)
