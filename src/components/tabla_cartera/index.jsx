import React from 'react';
import * as styles from './styles'
import Typography from 'src/components/Typography';
import {link} from 'react-router-dom';


const Tabla_cartera = () => {
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <styles.header><Typography type='paragraph1'>Fecha de ingreso</Typography></styles.header>
                        <styles.header><Typography type='paragraph1'>cliente</Typography></styles.header>
                        <styles.header><Typography type='paragraph1'>Vendedor</Typography></styles.header>
                        <styles.header><Typography type='paragraph1'>Cantidad total a pagar</Typography></styles.header>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <link to='./app/sales_details'>
                            <styles.data><Typography type='paragraph2'>7/10/2023</Typography></styles.data>
                            <styles.data><Typography type='paragraph2'>Keren Rodriguez</Typography></styles.data>
                            <styles.data><Typography type='paragraph2'>Cristian Diaz</Typography></styles.data>
                            <styles.data><Typography type='paragraph2'>2,000.00</Typography></styles.data>
                        </link>
                    </tr>
                </tbody>
            </table>
        </>
        
    )
}

export default Tabla_cartera;