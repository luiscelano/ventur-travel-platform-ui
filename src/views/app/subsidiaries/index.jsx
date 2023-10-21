import React from 'react'
import Typography from 'src/components/Typography'
import { Contenido } from './styles'
import { Table } from './styles'
import { Header } from './styles'
import { Row } from './styles'
import withSubsidiaries from 'src/containers/subsidiaries/withSubsidiaries'

const Subsidiaries = (props) => {
  const contactos = props.subsidiary
  return (
    <>
      {Object.keys(contactos).length > 0 ?
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
            {contactos.map((contacto) => (
              <tr>
                <Row>{contacto.nombre}</Row>
                <Row>{contacto.telefono}</Row>
                <Row>{contacto.createdAt}</Row>
              </tr>
            ))} 
            </Table>
        </Contenido>
      : 
      <Contenido>
        <Typography type="paragraph1">no hay contactos agregados por el momento</Typography>
      </Contenido>}
    </>
  )
}

export default withSubsidiaries(Subsidiaries)