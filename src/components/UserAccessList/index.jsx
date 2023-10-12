import React from 'react'
import * as styles from './styles'
import Typography from 'src/components/Typography'

const UserAccessList = ({ accessList = [] }) => {
  const onRowClick = () => {
    console.log('row clicked')
    // return navigate('/app/salesdetails')
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <styles.TableHead>
              <Typography type="paragraph1">Fecha creado</Typography>
            </styles.TableHead>
            <styles.TableHead>
              <Typography type="paragraph1">correo</Typography>
            </styles.TableHead>
            <styles.TableHead>
              <Typography type="paragraph1">Permiso</Typography>
            </styles.TableHead>
            <styles.TableHead>
              <Typography type="paragraph1">Aceptado</Typography>
            </styles.TableHead>
          </tr>
        </thead>
        <tbody>
          {accessList.map((accessItem) => (
            <tr onClick={onRowClick} style={{ cursor: 'pointer' }} key={accessItem.idAutorizacion}>
              <styles.TableCell>
                <Typography type="paragraph2">{accessItem.createdAt}</Typography>
              </styles.TableCell>
              <styles.TableCell>
                <Typography type="paragraph2">{accessItem.correo}</Typography>
              </styles.TableCell>
              <styles.TableCell>
                <Typography type="paragraph2">{accessItem.permiso.descripcion}</Typography>
              </styles.TableCell>
              <styles.TableCell>
                <Typography type="paragraph2">{accessItem.aceptado ? 'Si' : 'No'}</Typography>
              </styles.TableCell>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default UserAccessList
