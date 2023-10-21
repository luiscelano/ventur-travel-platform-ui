import React from 'react'
import * as styles from './styles'
import Typography from 'src/components/Typography'

const displayGoal = ({metas = []}) => {
    return (
      <>
          {Object.keys(metas).length > 0 ? 
            <styles.Contenido>
                <styles.meta>
                    <Typography type="paragraph1">Meta del mes: {metas.meta_alcanzar}</Typography>
                </styles.meta>
                <styles.avance>
                    <Typography type="paragraph1">Avance de la meta: {metas.meta_acumulada}</Typography>
                </styles.avance>
            </styles.Contenido> : 
            <styles.Contenido>
              <styles.avance>
                  <Typography type="paragraph1">no posees una meta asignada por el momento</Typography>
              </styles.avance>
            </styles.Contenido>}
      </>
    )
  }

export default displayGoal
