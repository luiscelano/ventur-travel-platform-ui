import React from 'react'
import Typography from 'src/components/Typography'
import { Contenido } from './styles'
import { Contenido1 } from './styles'
import { Contenido2 } from './styles'
import { Boton } from './styles'
import { Form } from './styles'
import { Input } from './styles'
import { Espacio } from './styles'
import { Input2 } from './styles'
import httpClient from 'src/utils/httpClient'
import { useState } from 'react';

const PackagesMod = () => {
  const [values, setValues] = useState({
    id_status_paquete: 1
  })
  const [paqueteCreado, setPaqueteCreado] = useState(false)
  const onSubmit = async (e) => {
    e.preventDefault()
    console.log('form submitted', values)
    try {
      const response = await httpClient.post('/paquetes', values)
      if (response.status === 200) {
        console.log('paquete creado correctamente', response.data)
        setPaqueteCreado(true)
      }
    } catch (error) {
      console.error('error al crear paquete', error)
    }
  }

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value
    })
  }

  return (
    <div>
      <Contenido>
        <Typography type="title" color="dark" size="large">
          Agrega Paquetes de viaje
        </Typography>
      </Contenido>

      <Contenido>
        <Typography type="paragraph2">Agrega paquetes de viaje</Typography>
        {paqueteCreado && <p>Paquete creado correctamente</p>}
      </Contenido>
      <Espacio></Espacio>
      <Form onSubmit={onSubmit}>

        <Typography type="paragraph2">

          <Input id="nombre" type="text" placeholder="Nombre del paquete" onChange={onChange} />

          <Input2 id="descripcion" type="text" placeholder="Descripcion" onChange={onChange} />

          <Input id="cantidadAdl" type="number" placeholder="Cantidad de adultos" onChange={onChange} />

          <Input2 id="cantidadChd" type="number" placeholder="Cantidad de niños" onChange={onChange} />

          <Input id="cantidadNoches" type="number" placeholder="Noches" onChange={onChange} />

          <Input2 id="fechaInicio" type="date" onChange={onChange} />

          <Input id="fechaFin" type="date" onChange={onChange} />

          <Input2 id="id_contacto" type="number" placeholder="Id Contacto" onChange={onChange} />

          <Input id="precio" type="number" placeholder="Precio" onChange={onChange} />

        </Typography>


        <Espacio></Espacio>
        <Contenido1>

          <Contenido2>
            <Boton type="submit"><Typography type="paragraph2">AGREGAR</Typography></Boton>
          </Contenido2>
        </Contenido1>
      </Form>
    </div>
  )
}

export default PackagesMod