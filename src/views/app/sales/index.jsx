import React from 'react'
import * as styles from './styles';
import Button from 'src/components/Button';
import Typography from 'src/components/Typography';
import Tabla_cartera from 'src/components/tabla_cartera'
import Filtros from 'src/components/filtros'

const Sales = () => {
  return (
    <>
      <styles.Contenido>
        <Typography type='title'>Cartera</Typography>
        <Typography type='paragraph2'>Visualiza las metas realizadas durante el mes</Typography>
        <styles.meta><Typography type='paragraph1'>Meta del mes</Typography></styles.meta>
        <styles.avance><Typography type='paragraph1'>Avance de la meta</Typography></styles.avance>
        <styles.botones>
          <Filtros></Filtros>
        </styles.botones>
        <Button>Agregar nueva venta</Button>
        <Tabla_cartera></Tabla_cartera>
      </styles.Contenido>
    </>
  )
}

export default Sales
