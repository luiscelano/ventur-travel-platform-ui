import React from 'react';
import logo from 'src/assets/ventur-logo.png'
import Field from 'src/components/Field'
import Button from 'src/components/Button'
// Estilos
import { Contenido } from './styles'
import { LogoContainer } from './styles'

const InicioSesion = () => {

    return (
        <>
            <Contenido>
                <LogoContainer src={logo} />
                <Field type="noDisable" size="large" color="background1" placeholder="Usuario"></Field>
                <Field type="noDisable" size="large" color="background2" placeholder="Usuario" pass="true"></Field>
                <Button size="small" color="background1">INGRESAR</Button>
            </Contenido>
        </>
    )
}

export default InicioSesion;