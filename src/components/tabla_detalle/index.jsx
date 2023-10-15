import React from 'react';
import * as styles from './styles'
import Typography from 'src/components/Typography';


const Tabla_detalle = ({ sales = []}) => {
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
                    {sales.map((sale) => (
                    <tr>
                        <styles.data><Typography type='paragraph2'>{sale.paquete.nombre}</Typography></styles.data>
                        <styles.data><Typography type='paragraph2'>{sale.cantidadTuristas}</Typography></styles.data>
                        <styles.data><Typography type='paragraph2'></Typography></styles.data>
                        <styles.data><Typography type='paragraph2'></Typography></styles.data>
                        <styles.data><Typography type='paragraph2'>{sale.pais.descripcion}</Typography></styles.data>
                        <styles.data><Typography type='paragraph2'>{sale.cantidadPaquetes}</Typography></styles.data>
                        <styles.data><Typography type='paragraph2'></Typography></styles.data>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </>
        
    )
}

export default Tabla_detalle;