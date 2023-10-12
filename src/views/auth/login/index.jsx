//siempre importar libreria react en todas las vistas
//que el nombre de las vistas empiecen con letra mayuscula
import React from 'react';
//import './styles.css'; poner hojas de estilos en components por buenas practicas
import * as styles from './styles'
import Typography from 'src/components/Typography';
import logo from 'src/assets/ventur-logo.png'
import Button from 'src/components/Button'

/* function prueba () {

} */

const InicioSesion = () => {
    const  option  = 'usuario';
    const  placeholder  = <Typography type='paragraph1'>{option}</Typography>;

    return(
        <>
            <styles.Contenido>
                <styles.LogoContainer src={logo} />
                <styles.usuario type='text' placeholder={option}></styles.usuario>
                <styles.psword type='password' placeholder='password'></styles.psword>
                <Button>Ingresar</Button>
            </styles.Contenido>
        </>
        
    )
}

export default InicioSesion;