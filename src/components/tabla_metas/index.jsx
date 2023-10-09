import React from 'react';
import * as styles from './styles'
import Typography from 'src/components/Typography';


const Tabla = () => {
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <styles.header><Typography type='paragraph1'>Mes</Typography></styles.header>
                        <styles.header><Typography type='paragraph1'>Año</Typography></styles.header>
                        <styles.header><Typography type='paragraph1'>Meta general a alcanzar</Typography></styles.header>
                        <styles.header><Typography type='paragraph1'>Meta individual</Typography></styles.header>
                        <styles.header><Typography type='paragraph1'>total acumulado</Typography></styles.header>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <styles.data><Typography type='paragraph1'>Octubre</Typography></styles.data>
                        <styles.data><Typography type='paragraph1'>2023</Typography></styles.data>
                        <styles.data><Typography type='paragraph1'>8,000.00</Typography></styles.data>
                        <styles.data><Typography type='paragraph1'>2,000.00</Typography></styles.data>
                        <styles.data><Typography type='paragraph1'>10,000.00</Typography></styles.data>
                    </tr>
                </tbody>
            </table>
        </>
        
    )
}

export default Tabla;