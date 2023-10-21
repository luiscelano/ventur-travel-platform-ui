import React from 'react'
import * as styles from './styles'
import Typography from 'src/components/Typography'
import withPackages from 'src/containers/packages/withPackages'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Paquetes = (props) => {
    const location = useLocation();
    const { idPaquete } = location.state || {};
    const { packages } = props;
    /* para validar si el array esta vacio o no */
    if(idPaquete) {
        console.log('paquete on')
        console.log(idPaquete)
        
    }else{
        console.log('paquete off')
        console.log(idPaquete)
    }
    
    if(packages){
        const paquete = packages.findIndex(paquete => paquete.idPaquete === idPaquete);
        if (paquete !== -1) {
          console.log('index ', paquete)
          /* lista de info completa a dar
             --> nombre del paquete
             --> descripcion
             --> cantidad de adultos
             --> cantidd de niños
             --> cantidad de noches
             --> nombre del contacto
             --> telefono
             --> precio
             --> status
          */
          const nom_paquete = packages[paquete].nombre;
          const descripcion_pckg = packages[paquete].descripcion;
          const num_adultos = packages[paquete].cantidadAdl;
          const num_ninios = packages[paquete].cantidadChd;
          const num_noches = packages[paquete].cantidadNoches;
          const contacto = packages[paquete].contacto.nombre;
          const telefono = packages[paquete].contacto.telefono;
          const precio = packages[paquete].precio;
          const status = packages[paquete].status.descripcion;
          const index = paquete;

          /* const nombre = sales[sale].vendedor.nombre;
          const apellido = sales[sale].vendedor.apellido;
          const nombre_completo = nombre + ' ' + apellido;
          const cliente = sales[sale].cliente.nombre;
          const index = sale; */
          console.log('paquete', props.packages)
          return (
            <>
              <styles.Contenido>
                <Typography type='title' color="dark">{nom_paquete}</Typography>
                <Typography type='paragraph1' color="light">status: {status}</Typography>
                <styles.dato1><Typography type='paragraph1'> {descripcion_pckg} </Typography></styles.dato1>
                <styles.dato2><Typography type='paragraph1'>numero de adultos: {num_adultos}</Typography></styles.dato2>
                <styles.dato1><Typography type='paragraph1'> numero de niños: {num_ninios} </Typography></styles.dato1>
                <styles.dato2><Typography type='paragraph1'>numero de noches: {num_noches}</Typography></styles.dato2>
                <styles.dato1><Typography type='paragraph1'>contacto: {contacto} </Typography></styles.dato1>
                <styles.dato2><Typography type='paragraph1'>telefono: {telefono}</Typography></styles.dato2>
                <styles.dato1><Typography type='paragraph1'>precio: Q{Number(precio).toFixed(2)} </Typography></styles.dato1>
              </styles.Contenido>
            </>
          )
        }else{
          return (
            <>
              <styles.Contenido>
                <Typography type='title'>Detalle de Paquete</Typography>
                <styles.dato1><Typography type='paragraph1'>no se pudo obtener el detalle </Typography></styles.dato1>
              </styles.Contenido>
            </>
          )
        }
    }
}

export default withPackages(Paquetes)
