import React from 'react'
import Typography from 'src/components/Typography'
import { Contenido } from './styles'
import { Table } from './styles'
import { Header } from './styles'
import { Row } from './styles'

const Subsidiaries = () => {
  return (
    <Contenido>
        <Typography type="title" color="dark">Contactos</Typography>
        {/* <Link to='/app/agregarClientes'>
            <Button>Agregar nuevo Cliente</Button>
        </Link> */}
        <Table>
          <tr>
            <Header>Nombre</Header>
            <Header>Telefono</Header>
            <Header>Fecha de creación</Header>
          </tr>
        {/* {detalle_clientes.map((cliente) => (
            <tr>
            <Row>{cliente.nombre}</Row>
            <Row>{cliente.dpi}</Row>
            <Row>{cliente.tipoCliente.descripcion}</Row>
            <Row>{cliente.telefono}</Row>
            <Row>{cliente.direccion}</Row>
            <Row>{cliente.correo}</Row>
            <Row>{cliente.tipoCliente.updatedAt}</Row>
          </tr>
        ))} */}
          <tr>
            <Row>John Doe</Row>
            <Row>Cliente Premium</Row>
            <Row>555-123-4567</Row>
            <Row>123 Main St</Row>
            <Row>john@example.com</Row>
            <Row>Activo</Row>
          </tr>
        </Table>
    </Contenido>
  )
}

export default Subsidiaries