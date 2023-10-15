import React, { useState } from 'react'
import * as styles from './styles'
import Typography from 'src/components/Typography'
import UserAccessList from 'src/components/UserAccessList'
import withUserAccessList from 'src/containers/access/withUserAccessList'
import Button from 'src/components/Button'
import Field from 'src/components/Field'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import httpClient from 'src/utils/httpClient'
import getHttpError from 'src/utils/getHttpError'

const UserAccessView = (props) => {
  const [newAccessValues, setNewAccessValues] = useState({
    correo: '',
    id_tipo_usuario: ''
  })
  const [submittingAccess, setSubmittingAccess] = useState(false)
  const [errors, setErrors] = useState({})
  const onChange = (event) => {
    setNewAccessValues({
      ...newAccessValues,
      [event.target.id]: event.target.value
    })
  }

  const validateInputs = () => {
    let errors = {}
    Object.keys(newAccessValues).forEach((key) => {
      if (!newAccessValues[key].toString().length) errors[key] = `Este campo requerido`
    })
    return errors
  }

  const submitNewAccess = async () => {
    const inputErrors = validateInputs()
    setErrors(inputErrors)
    if (Object.keys(inputErrors).length === 0) {
      setSubmittingAccess(true)
      try {
        const response = await httpClient.post('/auth/access', newAccessValues)
        if (response.status === 200) {
          console.log('Acceso generado correctamente', response.data)
          setSubmittingAccess(false)
          toast.success('Acceso generado correctamente', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: true
          })
          props.getAccessList()
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
        Permisos
      </Typography>
      <styles.FormContainer>
        <form style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ textAlign: 'center' }}>
            <Field id="correo" size="large" color="background1" placeholder="Correo" onChange={onChange} />
            {errors.correo && <span style={{ color: 'red' }}>{errors.correo}</span>}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Field
              color="background2"
              size="large"
              id="id_tipo_usuario"
              list="id_tipo_usuario_opciones"
              placeholder="Selecciona el tipo de permiso"
              onChange={onChange}
            />
            {errors.id_tipo_usuario && <span style={{ color: 'red' }}>{errors.id_tipo_usuario}</span>}
          </div>
          <datalist id="id_tipo_usuario_opciones">
            {Array.from(props.permisos || []).map((permiso, index) => (
              <option key={`permiso-${index}`} value={permiso.idTipoUsuario} label={permiso.descripcion} />
            ))}
          </datalist>
        </form>
        <Button size="medium" color="background1" onClick={submitNewAccess} disabled={submittingAccess}>
          {!submittingAccess ? 'Generar Acceso' : 'Cargando...'}
        </Button>
      </styles.FormContainer>
      <UserAccessList accessList={props.accesos} />
      {/* <ToastContainer /> */}
    </styles.AccessViewContainer>
  )
}

export default withUserAccessList(UserAccessView)
