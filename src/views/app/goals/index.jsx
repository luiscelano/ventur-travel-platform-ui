import React from 'react'
import * as styles from './styles'
import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import Tabla from 'src/components/tabla_metas'

const Metas = () => {
  const titulo = 'Agregar Metas'

  return (
    <>
       <styles.Contenido>
                <Typography type='title'>{titulo}</Typography>
                <styles.infometas>
                    <Typography type='paragraph2'>Agrega una Metas Mensual</Typography>
                    <styles.metas type='number' step='0.01' placeholder='Meta general a alcanzar'></styles.metas>
                    <styles.metaind type='number' step='0.01' placeholder='Meta Individual'></styles.metaind>
                    <Button>Ingresar</Button>
                </styles.infometas>
                <Tabla></Tabla>
            </styles.Contenido> 
    </>
  )
}

export default Metas
