import React, { useState } from 'react'
import * as styles from './styles'
import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import Field from 'src/components/Field'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import httpClient from 'src/utils/httpClient'
import UsersList from 'src/components/UsersList'
import withUsers from 'src/containers/users/withUsers'
import getHttpError from 'src/utils/getHttpError'

const UsersView = (props) => {
  const [idTipoUsuario, setIdTipoUsuario] = useState(null)
  const [selectedUser, setSelectedUser] = useState(null)
  const [isSubmitting, setSubmittingAccess] = useState(false)
  const [errors, setErrors] = useState({})

  const onSelectTipoUsuario = (event) => {
    setIdTipoUsuario(event.target.value)
  }

  const validateInputs = () => {
    let errors = {}
    if (!selectedUser) errors.user = 'Selecciona un usuario'
    if (!idTipoUsuario) errors.permission = 'Selecciona un permiso'
    return errors
  }

  const updateUser = async () => {
    const inputErrors = validateInputs()
    setErrors(inputErrors)

    if (Object.keys(inputErrors).length === 0) {
      try {
        const response = await httpClient.patch(`/usuarios/${selectedUser.idUsuario}`, {
          id_tipo_usuario: idTipoUsuario
        })
        if (response.status === 200) {
          console.log('Permiso actualizado correctamente', response.data)
          setSubmittingAccess(false)
          toast.success('Permiso actualizado correctamente', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: true
          })
          props.refetchUsers()
        }
      } catch (error) {
        console.error('error al generar Acceso', error)
        setSubmittingAccess(false)
        toast.error(getHttpError(error).message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: true
        })
      }
    }
  }

  return (
    <styles.AccessViewContainer>
      <Typography type="title" color="dark">
        Modificar Permisos
      </Typography>
      <styles.FormContainer>
        <form style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ textAlign: 'center' }}>
            <Field
              id="usuario"
              size="large"
              color="background1"
              value={selectedUser ? `${selectedUser.nombre} ${selectedUser.apellido}` : ''}
              placeholder="Usuario"
              disabled={true}
            />
            {errors.user && <span style={{ color: 'red' }}>{errors.user}</span>}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Field
              color="background2"
              size="large"
              id="id_tipo_usuario"
              list="id_tipo_usuario_opciones"
              placeholder="Selecciona el tipo de permiso"
              onChange={onSelectTipoUsuario}
            />
            {errors.permission && <span style={{ color: 'red' }}>{errors.permission}</span>}
          </div>
          <datalist id="id_tipo_usuario_opciones">
            {Array.from(props.permisos || []).map((permiso, index) => (
              <option key={`permiso-${index}`} value={permiso.idTipoUsuario} label={permiso.descripcion} />
            ))}
          </datalist>
        </form>
        <Button onClick={updateUser} size="medium" color="background1" disabled={isSubmitting}>
          {!isSubmitting ? 'Modificar permiso' : 'Cargando...'}
        </Button>
      </styles.FormContainer>
      <UsersList onSelect={setSelectedUser} users={props.usuarios} />
    </styles.AccessViewContainer>
  )
}

export default withUsers(UsersView)
