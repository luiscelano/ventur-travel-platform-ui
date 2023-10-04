import React  from "react";
import Typography from 'src/components/Typography'
import { Contenido } from './styles'
import { Contenido1 } from './styles'
import { Contenido2 } from './styles'
import { Boton } from './styles'
import { Form } from './styles'
import { Input } from './styles'
import { Espacio } from './styles'
import { Input2 } from './styles'

const ClientesMod = () => {
    return (
      <div>
        <Contenido>
        <Typography type="title" color="dark" size="large">
          Clientes
        </Typography>
      </Contenido>

      <Contenido>
        <Typography type="paragraph2">Modifica/Agrega Clientes nuevos</Typography>
      </Contenido>
        <Espacio></Espacio>
      <Form action="" method="get">
          
            <Typography type="paragraph2">
              <Input id="Nombre"  type="text" placeholder="Nombre" />
              
              <Input2 id="Tipo" list="opciones" name="Tipo" placeholder="Selecciona una opción" />
                <datalist id="opciones">
                <option value="Agencia"></option>
                <option value="Cliente final"></option>
                </datalist>
              
              <Input id="Telefono"  type="text" placeholder="Telefono" />
              
              <Input2 id="Direccion"  type="text" placeholder="Direccion" />
              
              <Input id="Correo"  type="text" placeholder="Correo" />
            
              <Input2 id="status"  list="opciones2" placeholder="Status" />
              <datalist id="opciones2">
                <option value="Activo"></option>
                <option value="Inactivo"></option>
                </datalist>
              
              
              
            </Typography>
            
              
            <Espacio></Espacio>

            <Contenido1>
            
            <Boton><Typography type="paragraph2">MODIFICAR</Typography></Boton>
            <Contenido2>
            <Boton><Typography type="paragraph2">AGREGAR</Typography></Boton>
            </Contenido2>
            </Contenido1>
            </Form>
      </div>
    )
  }
  
  export default ClientesMod