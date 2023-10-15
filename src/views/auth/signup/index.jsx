import React, { useState } from 'react'
import * as styles from './styles'
import logo from 'src/assets/ventur-logo.png'
import Field from 'src/components/Field'
import Button from 'src/components/Button'
import Typography from 'src/components/Typography'
import useQueryParams from 'src/utils/useQueryParams'
import { getIsAuthenticated, setAccessToken, setProfile, setRefreshToken } from 'src/utils/storage'
import { toast } from 'react-toastify'
import httpClient from 'src/utils/httpClient'
import getHttpError from 'src/utils/getHttpError'
import { Navigate } from 'react-router-dom'

const SignUpView = () => {
  const query = useQueryParams()
  const [values, setValues] = useState({
    correo: '',
    nombre: '',
    apellido: '',
    dpi: '',
    fechaNacimiento: '',
    fechaIngreso: '',
    contrasenia: '',
    id_status_vendedor: 2
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  const isAuthenticated = getIsAuthenticated()
  const authorizationCode = query.get('authorizationCode')

  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.id]: event.target.value
    })
  }

  const validateInputs = () => {
    let errors = {}
    Object.keys(values).forEach((key) => {
      if (!values[key].toString().length) errors[key] = `${key} es un campo requerido`
    })
    if (values.contrasenia !== confirmPassword) errors.confirmPassword = `La contraseña no coincide`
    return errors
  }

  const onConfirmPasswordChange = (event) => {
    const value = event.target.value
    if (value !== values.contrasenia)
      setErrors({
        ...errors,
        confirmPassword: 'La contraseña no coincide'
      })
    else {
      const errorKeys = { ...errors }
      delete errorKeys.confirmPassword
      setErrors(errorKeys)
    }
    setConfirmPassword(value)
  }

  const submitSignUp = async () => {
    const inputErrors = validateInputs()
    setErrors(inputErrors)
    if (Object.keys(inputErrors).length === 0) {
      setIsSubmitting(true)
      try {
        const data = { ...values, authorizationCode }
        const response = await httpClient.post('/auth/signup', data)
        if (response.status === 200) {
          setIsSubmitting(false)
          setAccessToken(response.data.accessToken)
          setRefreshToken(response.data.refreshToken)
          setProfile(response.data.usuario)
        }
      } catch (error) {
        const errorMessage = getHttpError(error).message
        console.error('Error al registrarse:', error)
        setIsSubmitting(false)
        toast.error(errorMessage, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: true
        })
      }
    }
  }
  if (isAuthenticated) return <Navigate to={'/app'} />

  if (!authorizationCode) return <div>authorization code is required</div>

  return (
    <>
      <styles.SignUpContainer>
        <styles.LogoContainer src={logo} />
        <Typography type="title" size="medium" color="dark">
          Registrarse
        </Typography>
        <label htmlFor="correo">
          Correo
          <Field
            id="correo"
            size="large"
            color="background1"
            placeholder="Correo"
            value={values.correo}
            onChange={onChange}
          />
        </label>
        {errors.correo && <span style={{ color: 'red' }}>{errors.correo}</span>}
        <label htmlFor="nombre">
          Nombre
          <Field
            id="nombre"
            size="large"
            color="background2"
            placeholder="Nombre"
            value={values.nombre}
            onChange={onChange}
          />
        </label>
        {errors.nombre && <span style={{ color: 'red' }}>{errors.nombre}</span>}
        <label htmlFor="apellido">
          Apellido
          <Field
            id="apellido"
            size="large"
            color="background1"
            placeholder="Apellido"
            value={values.apellido}
            onChange={onChange}
          />
        </label>
        {errors.apellido && <span style={{ color: 'red' }}>{errors.apellido}</span>}
        <label htmlFor="dpi">
          DPI
          <Field id="dpi" size="large" color="background2" placeholder="DPI" value={values.dpi} onChange={onChange} />
        </label>
        {errors.dpi && <span style={{ color: 'red' }}>{errors.dpi}</span>}
        <label htmlFor="fechaNacimiento">
          Fecha Nacimiento
          <Field
            id="fechaNacimiento"
            type="date"
            size="large"
            color="background1"
            value={values.fechaNacimiento}
            onChange={onChange}
          />
        </label>
        {errors.fechaNacimiento && <span style={{ color: 'red' }}>{errors.fechaNacimiento}</span>}
        <label htmlFor="fechaIngreso">
          Fecha Ingreso
          <Field
            id="fechaIngreso"
            type="date"
            size="large"
            color="background2"
            value={values.fechaIngreso}
            onChange={onChange}
          />
        </label>
        {errors.fechaIngreso && <span style={{ color: 'red' }}>{errors.fechaIngreso}</span>}
        <label htmlFor="contrasenia">
          Contraseña
          <Field
            id="contrasenia"
            type="password"
            size="large"
            color="background2"
            placeholder="Contraseña"
            value={values.contrasenia}
            onChange={onChange}
          />
        </label>
        {errors.contrasenia && <span style={{ color: 'red' }}>{errors.contrasenia}</span>}
        <label htmlFor="confirmPassword">
          Confirmar contraseña
          <Field
            id="confirmPassword"
            type="password"
            size="large"
            color="background2"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={onConfirmPasswordChange}
          />
        </label>
        {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}
        <Button size="medium" color="background1" onClick={submitSignUp} disabled={isSubmitting}>
          {!isSubmitting ? 'Registrarse' : 'Cargando...'}
        </Button>
      </styles.SignUpContainer>
    </>
  )
}

export default SignUpView
