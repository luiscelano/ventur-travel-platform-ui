import React from 'react';
import * as styles from './styles'
import Typography from 'src/components/Typography';

const Tabla = ({ goals = [] }) => {
    const mesesArray = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ];

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <styles.header><Typography type='paragraph1'>Mes</Typography></styles.header>
                        <styles.header><Typography type='paragraph1'>Año</Typography></styles.header>
                        <styles.header><Typography type='paragraph1'>Meta general a alcanzar</Typography></styles.header>
                        <styles.header><Typography type='paragraph1'>Meta individual</Typography></styles.header>
                        <styles.header><Typography type='paragraph1'>Total acumulado</Typography></styles.header>
                    </tr>
                </thead>
                <tbody>
                    {goals.map((meta, index) => (
                        <tr key={index}>
                            <styles.data><Typography type='paragraph1'>{mesesArray[meta.mes - 1]}</Typography></styles.data>
                            <styles.data><Typography type='paragraph1'>{meta.anio}</Typography></styles.data>
                            <styles.data><Typography type='paragraph1'>{meta.metaAlcanzar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography></styles.data>
                            <styles.data><Typography type='paragraph1'>{meta.metaIndividual.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography></styles.data>
                            <styles.data><Typography type='paragraph1'>0</Typography></styles.data>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Tabla;
