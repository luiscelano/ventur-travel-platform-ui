import React from 'react'
import * as styles from './styles'
import Typography from 'src/components/Typography'

const displayGoal = ({metas = []}) => {
    return (
      <>
              <styles.Contenido>
                  <styles.meta>
                      <Typography type="paragraph1">Meta del mes: {metas.meta_alcanzar}</Typography>
                  </styles.meta>
                  <styles.avance>
                      <Typography type="paragraph1">Avance de la meta: {metas.meta_acumulada}</Typography>
                  </styles.avance>
              </styles.Contenido>
      </>
    )
  }

export default displayGoal
