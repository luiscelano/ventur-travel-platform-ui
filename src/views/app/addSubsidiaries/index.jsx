import React, { useState } from 'react'
import * as styles from './styles'
import Button from 'src/components/Button'
import Typography from 'src/components/Typography'
import httpClient from 'src/utils/httpClient'
import { toast } from 'react-toastify'

const AddSubsidiaries = () => {

  const [values, setValues] = useState({
        nombre: '',
        telefono: ''
  })
  
  const [contactoCreado, setcontactoCreado] = useState(false)
  const onSubmit = async (e) => {
    e.preventDefault()
    console.log('form submitted', values)
    try {
      const response = await httpClient.post('/contactos', values)
      if (response.status === 200) {
        toast.success('Contacto agregado correctamente', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000 // Opcional: tiempo que se muestra el mensaje (en milisegundos)
          });
          // Limpia los campos
          setValues({
            nombre: '',
            telefono: ''
          });
        setcontactoCreado(true)
      }
    } catch (error) {
      //console.error('error al ingresar contacto', error)
      const errorMessage = getHttpError(error).message;
        console.error('Error al ingresar contacto:', error);
        toast.error(errorMessage, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: true
        });
    }
  }

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value
    })
  }

  return (
    <>
      <styles.Contenido>
        <Typography type="title" color="dark">Agregar Contacto</Typography>
        <Typography type="paragraph2">Ingresa los datos solicitados</Typography>
        <styles.Formulario onSubmit={onSubmit}>
          <styles.nombreContacto id='nombre' type='text' placeholder='Nombre del contacto' onChange={onChange}></styles.nombreContacto>
          <styles.telefono id="telefono" type='number' placeholder='telefono' onChange={onChange}></styles.telefono>
          
          <Button type="submit">Agregar Contacto</Button>
          {contactoCreado ? <p>Contacto agregado correctamente!</p> : <p>hubo un error :s</p>}
        </styles.Formulario>
      </styles.Contenido>
    </>
  )
}

export default AddSubsidiaries
