import React from 'react'
import * as styles from './styles'
import Typography from 'src/components/Typography'
import { useNavigate } from 'react-router-dom'

const Tabla_cartera = ({ sales = [] }) => {
  const navigate = useNavigate()
  //const id_vendor = { idv: sales.id_usuario}
  const onRowClick = (idCartera) => {
    console.log('row clicked')
    //return navigate('/app/salesdetails/')
    return navigate('/app/salesdetails', {state: {idCartera}});
    //return navigate(`/app/salesdetails/${idCartera}`)
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <styles.header>
              <Typography type="paragraph1">Fecha de ingreso</Typography>
            </styles.header>
            <styles.header>
              <Typography type="paragraph1">cliente</Typography>
            </styles.header>
            <styles.header>
              <Typography type="paragraph1">Vendedor</Typography>
            </styles.header>
            <styles.header>
              <Typography type="paragraph1">Cantidad total a pagar</Typography>
            </styles.header>
          </tr>
        </thead>
        <>
          {sales.map((sale) => (
            //<tr onClick={onRowClick} style={{ cursor: 'pointer' }}>
            <tr onClick={() => onRowClick(sale.idCartera)} style={{ cursor: 'pointer' }}>
              <styles.data>
                <Typography type="paragraph2">{sale.createdAt}</Typography>
              </styles.data>
              <styles.data>
                <Typography type="paragraph2">{sale.cliente.nombre}</Typography>
              </styles.data>
              <styles.data>
                <Typography type="paragraph2">{sale.vendedor.nombre}</Typography>
              </styles.data>
              <styles.data>
                <Typography type="paragraph2">{Number(sale.totalPagar).toFixed(2)}</Typography>
              </styles.data>
            </tr>
          ))}
        </>
      </table>
    </>
  )
}

export default Tabla_cartera
