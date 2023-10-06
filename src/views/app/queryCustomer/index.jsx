import React from 'react'
import { Contenido } from './styles'
import { Section1 } from './styles'
import { Table } from './styles'
import { Header } from './styles'
import { Row } from './styles'
import Typography from 'src/components/Typography'
import Field from 'src/components/Field'

const QueryCustomer = () => {
  return <>
    <Contenido>
      <Typography type="title" color="dark">Detalle de Clientes</Typography>
      <Typography type="paragraph2">Consulta de clientes</Typography>
      <Section1>
        <Typography type="paragraph1" size="small">Cliente</Typography>
        <Field type="noDisable" size="large" color="background1"></Field>
      </Section1>

      <Table>
        <tr>
          <Header>Nombre</Header>
          <Header>Tipo de Cliente</Header>
          <Header>Teléfono</Header>
          <Header>Dirección</Header>
          <Header>Correo electrónico</Header>
          <Header>Estado</Header>
        </tr>

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
  </>
}

export default QueryCustomer