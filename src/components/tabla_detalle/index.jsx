import React from 'react';
import * as styles from './styles'
import Typography from 'src/components/Typography';


const Tabla_detalle = ({ sales, selectedIndex = []}) => {
    const nombre_paquete = sales[selectedIndex].paquete.nombre;
    const turistas = sales[selectedIndex].cantidadTuristas;
    const fechaini = sales[selectedIndex].paquete.fechaInicio;
    const fechafin = sales[selectedIndex].paquete.fechaFin;
    const pais = sales[selectedIndex].pais.descripcion;
    const cantidad = sales[selectedIndex].cantidadPaquetes;
    const precio = sales[selectedIndex].paquete.precio;
    console.log('cantidad ', cantidad)
    //console.log('index traido ', selectedIndex)
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
                        <styles.data><Typography type='paragraph2'>{nombre_paquete}</Typography></styles.data>
                        <styles.data><Typography type='paragraph2'>{turistas}</Typography></styles.data>
                        <styles.data><Typography type='paragraph2'></Typography>{fechaini}</styles.data>
                        <styles.data><Typography type='paragraph2'></Typography>{fechafin}</styles.data>
                        <styles.data><Typography type='paragraph2'>{pais}</Typography></styles.data>
                        <styles.data><Typography type='paragraph2'>{cantidad}</Typography></styles.data>
                        <styles.data><Typography type='paragraph2'></Typography>{precio}</styles.data>
                    </tr>
                </tbody>
            </table>
        </>
        
    )
}

export default Tabla_detalle;