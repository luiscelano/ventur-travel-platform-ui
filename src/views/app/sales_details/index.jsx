import React from 'react'
import * as styles from './styles';
import Typography from 'src/components/Typography';
import Tabla_detalle from 'src/components/tabla_detalle'
import withSales from 'src/containers/sales/withSales'
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

/* const Sales = (props) => {
  const {sales} = props;
  console.log('sales', props.sales)
  return (
    <>
      <styles.Contenido>
        <Typography type='title'>Detalle de Ventas</Typography>
        <styles.vendedor><Typography type='paragraph1'>Vendedor: {sales.cantidadTuristas}</Typography></styles.vendedor>
        <styles.cliente><Typography type='paragraph1'>Cliente</Typography></styles.cliente>
        <Tabla_detalle sales={props.sales}></Tabla_detalle>
      </styles.Contenido>
    </>
  )
} */

const Sales = (props) => {
  const location = useLocation();
  const { idCartera } = location.state || {};
  const {sales} = props;
  /* para validar si el array esta vacio o no */
  if(idCartera) {
    console.log('cartera on')
    console.log(idCartera)
    
  }else{
    console.log('cartera off')
    console.log(idCartera)
  }

  if(sales){
    const sale = sales.findIndex(sale => sale.idCartera === idCartera);
    if (sale !== -1) {
      console.log('index ', sale)
      const nombre = sales[sale].vendedor.nombre;
      const apellido = sales[sale].vendedor.apellido;
      const nombre_completo = nombre + ' ' + apellido;
      const cliente = sales[sale].cliente.nombre;
      const index = sale;
      console.log('sales', props.sales)
      return (
        <>
          <styles.Contenido>
            <Typography type='title'>Detalle de Ventas</Typography>
            <styles.vendedor><Typography type='paragraph1'>Vendedor: {nombre_completo} </Typography></styles.vendedor>
            <styles.cliente><Typography type='paragraph1'>Cliente: {cliente}</Typography></styles.cliente>
            <Tabla_detalle sales={props.sales} selectedIndex={index}></Tabla_detalle>
          </styles.Contenido>
        </>
      )
    }else{
      return (
        <>
          <styles.Contenido>
            <Typography type='title'>Detalle de Ventas</Typography>
            <styles.vendedor><Typography type='paragraph1'>no se pudo obtener el detalle </Typography></styles.vendedor>
          </styles.Contenido>
        </>
      )
    }
  }
  
}

export default withSales(Sales)
