import React from 'react'
import Typography from 'src/components/Typography'
import { Contenido } from './styles'
import { boton } from './styles'
import { formulario } from './styles'

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

      <Contenido>
       
        <formulario>
          <form action="" method="get">
            <Typography type="paragraph1">
              <input id="Nombre" type="text" placeholder="Nombre del paquete" />
            </Typography>

           
            <boton>
              <button>sss</button>
            </boton>
          </form>
        </formulario>
      </Contenido>
    </div>
  )
}

export default Packages