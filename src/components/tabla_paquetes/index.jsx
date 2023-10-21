import React from 'react'
import * as styles from './styles'
import Typography from 'src/components/Typography'
import { useNavigate } from 'react-router-dom'

const tablaPaquetes = ({ paquetes = [] }) => {
    console.log(paquetes)
    const navigate = useNavigate()
    const onRowClick = (idPaquete) => {
        console.log('row clicked')
        return navigate('/app/Packagesdetails', {state: {idPaquete}});
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <styles.header>
                            <Typography type="paragraph1">Nombre del Paquete</Typography>
                        </styles.header>
                        <styles.header>
                            <Typography type="paragraph1">Descripcion</Typography>
                        </styles.header>
                        <styles.header>
                            <Typography type="paragraph1">Cantidad de Adultos</Typography>
                        </styles.header>
                        <styles.header>
                            <Typography type="paragraph1">Cantidad de Menores</Typography>
                        </styles.header>
                        <styles.header>
                            <Typography type="paragraph1">Numero de Noches</Typography>
                        </styles.header>
                        <styles.header>
                            <Typography type="paragraph1">Precio</Typography>
                        </styles.header>
                    </tr>
                </thead>
                <tbody>
                    {paquetes.map((paquete) => (
                       /*  <tr onClick={onRowClick} style={{ cursor: 'pointer' }}> */
                        <tr onClick={() => onRowClick(paquete.idPaquete)} style={{ cursor: 'pointer' }}>
                            <styles.data>
                                <Typography type="paragraph2">{paquete.nombre}</Typography>
                            </styles.data>
                            <styles.data>
                                <Typography type="paragraph2">{paquete.descripcion}</Typography>
                            </styles.data>
                            <styles.data>
                                <Typography type="paragraph2">{paquete.cantidadAdl}</Typography>
                            </styles.data>
                            <styles.data>
                                <Typography type="paragraph2">{paquete.cantidadChd}</Typography>
                            </styles.data>
                            <styles.data>
                                <Typography type="paragraph2">{paquete.cantidadNoches}</Typography>
                            </styles.data>
                            <styles.data>
                                <Typography type="paragraph2">Q{Number(paquete.precio).toFixed(2)}</Typography>
                            </styles.data>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default tablaPaquetes
