import React from 'react'
import Typography from 'src/components/Typography'
import { Contenido } from './styles'
import { Contenido1 } from './styles'
import { Contenido2 } from './styles'
import { Boton } from './styles'
import { Form } from './styles'
import { Input } from './styles'
import { Espacio } from './styles'
import { Input2 } from './styles'

const PackagesMod = () => {
    return (
      <div>
        <Contenido>
        <Typography type="title" color="dark" size="large">
          Modifica Paquetes de viaje
        </Typography>
      </Contenido>

      <Contenido>
        <Typography type="paragraph2">Modifica/Agrega paquetes de viaje</Typography>
      </Contenido>
        <Espacio></Espacio>
      <Form action="" method="get">
          
            <Typography type="paragraph2">
              <Input id="Nombre"  type="text" placeholder="Nombre del paquete" />
              
              <Input2 id="Descripcion"  type="text" placeholder="Descripcion" />
              
              <Input id="CantAdultos"  type="number" placeholder="Cantidad de adultos" />
              
              <Input2 id="CantNiños"  type="number" placeholder="Cantidad de niños" />
              
              <Input id="Noches"  type="number" placeholder="Noches" />
            
              <Input2 id="Lugar"  type="text" placeholder="Hotel o Lugar" />
              
              <Input id="Precio"  type="text" placeholder="Precio" />
            </Typography>
            
              
            <Espacio></Espacio>
            <Contenido1>
            
            <Boton><Typography type="paragraph2">MODIFICAR</Typography></Boton>
            <Contenido2>
            <Boton><Typography type="paragraph2">BUSCAR</Typography></Boton>
            </Contenido2>
            </Contenido1>
            </Form>
      </div>
    )
  }
  
  export default PackagesMod