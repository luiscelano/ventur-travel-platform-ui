import React from 'react'
import * as styles from './styles'
import Typography from '../Typography';

//const Button = (props) => {
const Filtros = () => {
    //const {text} = props
    return (
        <>
            <styles.mes name='mes-ingreso'>
                <option value="" disabled selected><Typography type='paragraph1'>mes de ingreso</Typography></option>
                <option value='01'>enero</option>
                <option value='02'>febrero</option>
                <option value='03'>marzo</option>
            </styles.mes>
            <styles.anio name='anio-ingreso'>
                <option value="" disabled selected><Typography type='paragraph1'>año de ingreso</Typography></option>
                <option value='2023'>2023</option>
                <option value='2022'>2022</option>
            </styles.anio>
            <styles.vendedor>
                <option value="" disabled selected><Typography type='paragraph1'>vendedor</Typography></option>
                <option value='id vendedor 1'>Cristian Diaz</option>
                <option value='id vendedor 2'>Keren Rodriguez</option>
            </styles.vendedor>
            <styles.cliente>
                <option value="" disabled selected><Typography type='paragraph1'>cliente</Typography></option>
                <option value='id vendedor 1'>Cristian Diaz</option>
                <option value='id vendedor 2'>Keren Rodriguez</option>
            </styles.cliente>
        </>
        
    )
}

export default Filtros;