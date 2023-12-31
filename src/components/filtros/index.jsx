import React, { useState } from 'react'
import * as styles from './styles'
import Typography from '../Typography';
import Tabla_cartera from 'src/components/tabla_cartera'
import withFilters from 'src/containers/filters/withFilters'
import { getProfile } from 'src/utils/storage'

//const Button = (props) => {
const Filtros = (props) => {
    const user = getProfile()
    console.log('vendedores ')
    const vendedores = props.users
    const clientes = props.clientes
    const sales = props.sales
    const mesesDelAnio = [
        { value: '01', label: 'enero' },
        { value: '02', label: 'febrero' },
        { value: '03', label: 'marzo' },
        { value: '04', label: 'abril' },
        { value: '05', label: 'mayo' },
        { value: '06', label: 'junio' },
        { value: '07', label: 'julio' },
        { value: '08', label: 'agosto' },
        { value: '09', label: 'septiembre' },
        { value: '10', label: 'octubre' },
        { value: '11', label: 'noviembre' },
        { value: '12', label: 'diciembre' },
      ];

    const obtenerAnios = () => {
      const anioActual = new Date().getFullYear();
      const anosAnteriores = [anioActual, anioActual - 1, anioActual - 2];
      return anosAnteriores;
    };

    const anios = obtenerAnios();

    return (
        <>
        {Object.keys(sales).length > 0 ? 
            <styles.Contenido>
                <styles.orden>
                    <styles.mes name='mes-ingreso' value={props.mes_filtro} onChange={(e) => props.setMes(e.target.value)}>
                        <option value="" disabled selected><Typography type='paragraph1'>mes de ingreso</Typography></option>
                        {mesesDelAnio.map((mes) => (
                            <option value={mes.value}>
                                {mes.label}
                            </option>
                        ))}
                    </styles.mes>
                    <styles.anio name='anio-ingreso' value={props.anio_filtro} onChange={(e) => props.setAnio(e.target.value)}>
                        <option value="" disabled selected><Typography type='paragraph1'>año de ingreso</Typography></option>
                        {anios.map((anio) => (
                            <option value={anio}>
                                {anio}
                            </option>
                        ))}
                    </styles.anio>
                    {typeof vendedores === 'object' && vendedores !== null &&  
                       
                            <styles.vendedor name='vendedor' value={props.vendedor_filtro} onChange={(e) => props.setPorVendedor(e.target.value)}>
                                <option value="" disabled selected><Typography type='paragraph1'>vendedor</Typography></option>
                                {vendedores.map((vendedor) => (
                                    <option value={vendedor.idUsuario}>{vendedor.nombre},{vendedor.apellido}</option>
                                ))}
                            </styles.vendedor>
                    }
                    
                    {/* {<styles.vendedor name='vendedor' value={props.vendedor_filtro} onChange={(e) => props.setPorVendedor(e.target.value)}>
                        <option value="" disabled selected><Typography type='paragraph1'>vendedor</Typography></option>
                        {vendedores.map((vendedor) => (
                            <option value={vendedor.idUsuario}>{vendedor.nombre} {vendedor.apellido}</option>
                        ))}
                    </styles.vendedor>} */}
                    <styles.cliente name='cliente' value={props.clientes_filtro} onChange={(e) => props.setPorCliente(e.target.value)}>
                        <option value="" disabled selected><Typography type='paragraph1'>cliente</Typography></option>
                        {clientes.map((cliente) => (
                            <option value={cliente.idCliente}>{cliente.nombre}</option>
                        ))}
                    </styles.cliente>
                </styles.orden>
                <Tabla_cartera sales={props.sales}></Tabla_cartera>
            </styles.Contenido>
        
        : <styles.Contenido>
            <styles.advertencia>
                <Typography type="paragraph1">hubo un error al intentar obtener ventas</Typography>
            </styles.advertencia>
          </styles.Contenido>}
        </>
    )
}

export default withFilters(Filtros);