import React from 'react'
import * as styles from './styles'
import Button from 'src/components/Button'
import Typography from 'src/components/Typography'
import Tabla_cartera from 'src/components/tabla_cartera'
import Filtros from 'src/components/filtros'

const AddSales = (props) => {
  console.log('sales', props.sales)
  return (
    <>
      <styles.Contenido>
        <Typography type="title">Agregar Venta</Typography>
        <Typography type="paragraph2">Ingresa los datos solicitados</Typography>
        <styles.paquete name='paquete'>
            <option value="" disabled selected><Typography type='paragraph1'>paquete</Typography></option>
            <option value="paquete1">Paquete 1</option>
            <option value="paquete2">Paquete 2</option>
            <option value="paquete3">Paquete 3</option>
        </styles.paquete>
        <styles.turistas type='number' step='0.01' placeholder='Num. de Turistas'></styles.turistas>
        <styles.numpaquete type='number' step='0.01' placeholder='Cantidad de paquetes'></styles.numpaquete>
        <styles.cliente name='paquete'>
            <option value="" disabled selected><Typography type='paragraph1'>cliente</Typography></option>
            <option value="paquete1">Paquete 1</option>
            <option value="paquete2">Paquete 2</option>
            <option value="paquete3">Paquete 3</option>
        </styles.cliente>
        <Button>Agregar nueva venta</Button>
        <Tabla_cartera sales={props.sales}></Tabla_cartera>
      </styles.Contenido>
    </>
  )
}

export default AddSales
