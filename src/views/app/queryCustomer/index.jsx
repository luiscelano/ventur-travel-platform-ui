import React from 'react'
import { Contenido } from './styles'
import { Section1 } from './styles'
import { Table } from './styles'
import { Header } from './styles'
import { Row } from './styles'
import Typography from 'src/components/Typography'
import Field from 'src/components/Field'
import { Link } from 'react-router-dom'
import Button from 'src/components/Button'
import withClientes from 'src/containers/clientes/withClientes'

const QueryCustomer = (props) => {
  const detalle_clientes = props.clientes;
  console.log('clientes', detalle_clientes)
  return (
    <>
      <Contenido>
        <Typography type="title" color="dark">
          Detalle de Clientes
        </Typography>
        <Link to='/app/agregarClientes'>
            <Button>Agregar nuevo Cliente</Button>
        </Link>
        <Table>
          <tr>
            <Header>Nombre</Header>
            <Header>DPI</Header>
            <Header>Tipo</Header>
            <Header>Teléfono</Header>
            <Header>Dirección</Header>
            <Header>Correo electrónico</Header>
            <Header>Ult. Fecha actualizacion</Header>
          </tr>
        {detalle_clientes.map((cliente) => (
            <tr>
            <Row>{cliente.nombre}</Row>
            <Row>{cliente.dpi}</Row>
            <Row>{cliente.tipoCliente.descripcion}</Row>
            <Row>{cliente.telefono}</Row>
            <Row>{cliente.direccion}</Row>
            <Row>{cliente.correo}</Row>
            <Row>{cliente.tipoCliente.updatedAt}</Row>
          </tr>
        ))}
        </Table>
      </Contenido>
    </>
  )
}

export default withClientes(QueryCustomer)
