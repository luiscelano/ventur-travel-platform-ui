import React, { useState } from 'react'
import * as styles from './styles'
import Button from 'src/components/Button'
import Typography from 'src/components/Typography'
import withSales from 'src/containers/sales/withSales'
import Tabla_cartera from 'src/components/tabla_cartera'
import httpClient from 'src/utils/httpClient'
//import Filtros from 'src/components/filtros'

const AddSales = (props) => {
 //const { datos_cartera } = props;
  const paquetes = props.paquetes;
  const metas = props.metas;
  const clientes = props.clientes;

  const [values, setValues] = useState({
    id_pais: 1
  })
  const [ventacreada, setVentaCreada] = useState(false)
  const onSubmit = async (e) => {
    e.preventDefault()
    console.log('form submitted', values)
    try {
      const response = await httpClient.post('/carteras', values)
      if (response.status === 200) {
        console.log('venta agregada correctamente!', response.data)
        setVentaCreada(true)
      }
    } catch (error) {
      console.error('error al ingresar venta', error)
    }
  }

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value
    })
  }

  return (
    <>
      <styles.Contenido>
        <Typography type="title">Agregar Venta</Typography>
        <Typography type="paragraph2">Ingresa los datos solicitados</Typography>
        <styles.Formulario onSubmit={onSubmit}>
          <styles.paquete id='id_paquete' onChange={onChange}>
              <option value="" disabled selected><Typography type='paragraph1'>paquete</Typography></option>
              {paquetes.map((paquete) => (
                 <option value={paquete.idPaquete}>{paquete.nombre}</option>
              ))}
              {/* <option value={1}>Paquete 1</option>
              <option value={2}>Paquete 2</option> */}
          </styles.paquete>
          <styles.turistas id='cantidadTuristas' type='number' step='0.01' placeholder='Num. de Turistas' onChange={onChange}></styles.turistas>
          <styles.numpaquete id="cantidadPaquetes" type='number' step='0.01' placeholder='Cantidad de paquetes' onChange={onChange}></styles.numpaquete>
          <styles.cliente id="id_cliente" onChange={onChange}>
              <option value="" disabled selected><Typography type='paragraph1'>cliente</Typography></option>
              {clientes.map((cliente) => (
                 <option value={cliente.idCliente}>{cliente.nombre}</option>
              ))}
              {/* <option value={1}>Paquete 1</option>
              <option value={2}>Paquete 2</option> */}
          </styles.cliente>
          <styles.pais id="id_pais" onChange={onChange}>
              <option value="" disabled selected><Typography type='paragraph1'>Pais</Typography></option>
              <option value={1}>Guatemala</option>
              <option value={2}>El Salvador</option>
          </styles.pais>
          <Button type="submit">Agregar venta</Button>
          {ventacreada ? <p>Venta agregada correctamente!</p> : <p>hubo un error :s</p>}
        </styles.Formulario>
        
        <Tabla_cartera sales={props.sales}></Tabla_cartera>
      </styles.Contenido>
    </>
  )
}

export default withSales(AddSales)
