import React, { useState } from 'react';
import logo from 'src/assets/ventur-logo.png'
import Field from 'src/components/Field'
import Button from 'src/components/Button'
import { toast } from 'react-toastify'
import { getIsAuthenticated, setAccessToken, setProfile, setRefreshToken } from 'src/utils/storage';
import getHttpError from 'src/utils/getHttpError';
import { Navigate } from 'react-router-dom';
import httpClient from 'src/utils/httpClient';
import { Contenido } from './styles'
import { LogoContainer } from './styles'

const InicioSesion = () => {

    const [isSubmitting, setIsSubmitting] = useState(false)
    const isAuthenticated = getIsAuthenticated()

    // Listado de valores del formulario
    const [values, setValues] = useState({
        correo: '',
        contrasenia: ''
    })

    const [errors, setErrors] = useState({})

    const onChange = (event) => {
        setValues({
            ...values,
            [event.target.id]: event.target.value
        })
    }

    const onSubmit = async () => {
        const inputErrors = validateInputs();
        setErrors(inputErrors);
        if (Object.keys(inputErrors).length === 0) {
            setIsSubmitting(true)
            try {
                const response = await httpClient.post('/auth/login', values)
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

    const validateInputs = () => {
        let errors = {}
        Object.keys(values).forEach((key) => {
            if (!values[key].toString().length) errors[key] = `${key} es un campo requerido`
        })
        return errors
    }

    if (isAuthenticated) return <Navigate to={'/app'} />

    return (
        <>
            <Contenido>
                <LogoContainer src={logo} />
                <Field
                    size="large"
                    color="background1"
                    placeholder="Correo"
                    id="correo"
                    onChange={onChange}
                />
                {errors.correo && <span style={{ color: 'red' }}>{errors.correo}</span>}

                <Field
                    type="password"
                    size="large"
                    color="background2"
                    placeholder="Password"
                    id="contrasenia"
                    onChange={onChange}
                />
                {errors.contrasenia && <span style={{ color: 'red' }}>{errors.contrasenia}</span>}

                <Button
                    size="small"
                    color="background1"
                    onClick={onSubmit}
                    disabled={isSubmitting}
                >
                    {!isSubmitting ? 'Ingresar' : 'Cargando...'}
                </Button>
            </Contenido>
        </>
    )
}

export default InicioSesion;