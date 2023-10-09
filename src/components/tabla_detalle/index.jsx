import React from 'react';
import * as styles from './styles'
import Typography from 'src/components/Typography';


const Tabla_detalle = () => {
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <styles.header><Typography type='paragraph1'>Paquete</Typography></styles.header>
                        <styles.header><Typography type='paragraph1'>Cantidad de turistas</Typography></styles.header>
                        <styles.header><Typography type='paragraph1'>Fecha de inicio</Typography></styles.header>
                        <styles.header><Typography type='paragraph1'>Fecha fin</Typography></styles.header>
                        <styles.header><Typography type='paragraph1'>Pais</Typography></styles.header>
                        <styles.header><Typography type='paragraph1'>Cantidad de paquetes adquiridos</Typography></styles.header>
                        <styles.header><Typography type='paragraph1'>Precio por paquete</Typography></styles.header>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <styles.data><Typography type='paragraph2'>Roatan</Typography></styles.data>
                        <styles.data><Typography type='paragraph2'>4</Typography></styles.data>
                        <styles.data><Typography type='paragraph2'>01/10/2023</Typography></styles.data>
                        <styles.data><Typography type='paragraph2'>10/10/2023</Typography></styles.data>
                        <styles.data><Typography type='paragraph2'>GT</Typography></styles.data>
                        <styles.data><Typography type='paragraph2'>2</Typography></styles.data>
                        <styles.data><Typography type='paragraph2'>2,000.00</Typography></styles.data>
                    </tr>
                </tbody>
            </table>
        </>
        
    )
}

export default Tabla_detalle;