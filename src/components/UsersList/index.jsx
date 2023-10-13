import React from 'react'
import * as styles from './styles'
import Typography from 'src/components/Typography'

const UsersList = ({ users = [], onSelect = () => {} }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <styles.TableHead>
              <Typography type="paragraph1">Fecha creado</Typography>
            </styles.TableHead>
            <styles.TableHead>
              <Typography type="paragraph1">Nombre</Typography>
            </styles.TableHead>
            <styles.TableHead>
              <Typography type="paragraph1">Apellido</Typography>
            </styles.TableHead>
            <styles.TableHead>
              <Typography type="paragraph1">Correo</Typography>
            </styles.TableHead>
            <styles.TableHead>
              <Typography type="paragraph1">Permiso</Typography>
            </styles.TableHead>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr onClick={() => onSelect(user)} style={{ cursor: 'pointer' }} key={`usuario-${user.idUsuario}`}>
              <styles.TableCell>
                <Typography type="paragraph2">{user.createdAt}</Typography>
              </styles.TableCell>
              <styles.TableCell>
                <Typography type="paragraph2">{user.nombre}</Typography>
              </styles.TableCell>
              <styles.TableCell>
                <Typography type="paragraph2">{user.apellido}</Typography>
              </styles.TableCell>
              <styles.TableCell>
                <Typography type="paragraph2">{user.correo}</Typography>
              </styles.TableCell>
              <styles.TableCell>
                <Typography type="paragraph2">{user.permiso.descripcion}</Typography>
              </styles.TableCell>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default UsersList
