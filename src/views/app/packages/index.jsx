import React from 'react'
import Typography from 'src/components/Typography'
import { Contenido } from './styles'
import { Contenido1 } from './styles'
import { Boton } from './styles'
import { Tabla } from './styles'
import { Form } from './styles'
import { Input } from './styles'
import { Tr } from './styles'
import { Td } from './styles'
import { Espacio } from './styles'
import { Thead } from './styles'

const Packages = () => {
  return (
    <div>
      <Contenido>
        <Typography type="title" color="dark" size="large">
          Paquetes de viaje
        </Typography>
      </Contenido>

      <Contenido>
        <Typography type="paragraph2">Consulta paquetes de viaje</Typography>
      </Contenido>

        
          <Form>
          <Contenido1>
            <Typography type="paragraph2">
              <Input id="Nombre"  type="text" placeholder="Nombre del paquete" />
            </Typography>
            
              <Boton><Typography type="paragraph2">BUSCAR</Typography></Boton>
              
            </Contenido1>
      
            </Form>

    <Espacio>
    </Espacio>

    <Contenido>
    <Typography type="paragraph2">
      <Tabla>
      <Thead>
      <Tr>
        <Td>Nombre del Paquete </Td>
        <Td> Decripcion</Td>
        <Td>Cantidad de adultos </Td>
        <Td>Cantidad de niños</Td>
        <Td>Numero de noches</Td>
        <Td>Hotel o lugar</Td>
        <Td>precio</Td>
      </Tr>
      </Thead>
      <Tr></Tr>
      <Tr></Tr>
      <Tr></Tr>

      </Tabla>
      </Typography>
    </Contenido>

    </div>
  )
}

export default Packages