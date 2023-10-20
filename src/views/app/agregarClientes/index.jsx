import React, { useState } from 'react'
import Typography from 'src/components/Typography'
import { Contenido } from './styles'
import { Contenido1 } from './styles'
import { Contenido2 } from './styles'
import { Boton } from './styles'
import { Form } from './styles'
import { Input } from './styles'
import { Espacio } from './styles'
import { Input2 } from './styles'
import { Cliente } from './styles'
import httpClient from 'src/utils/httpClient'

const ClientesMod = () => {
  const [values, setValues] = useState({
    id_tipo_cliente: 2
  })
  const [clienteCreado, setClienteCreado] = useState(false)
  const onSubmit = async (e) => {
    e.preventDefault()
    console.log('form submitted', values)
    try {
      const response = await httpClient.post('/clientes', values)
      if (response.status === 200) {
        console.log('cliente creado correctamente', response.data)
        setClienteCreado(true)
      }
    } catch (error) {
      console.error('error al crear cliente', error)
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
          Clientes .
        </Typography>
      </Contenido>

      <Contenido>
        <Typography type="paragraph2">Agrega Clientes nuevos</Typography>
        {clienteCreado && <p>Cliente creado correctamente</p>}
      </Contenido>
      <Espacio></Espacio>
      <Form onSubmit={onSubmit}>
        <Typography type="paragraph2">
          <Input2 id="dpi" type="text" placeholder="DPI" onChange={onChange} />
          <Input id="nombre" type="text" placeholder="Nombre" onChange={onChange} />
          <Cliente id="tipo" onChange={onChange}>
              <option value="" disabled selected><Typography type='paragraph1'>tipo de cliente</Typography></option>
              <option value={1}>Agencia</option>
              <option value={2}>Cliente Final</option>
          </Cliente>
          {/* <Input2 id="tipo" list="opciones" name="Tipo" placeholder="Selecciona una opción" onChange={onChange} />
          <datalist id="opciones">
            <option value={1} label="Agencia"></option>
            <option value={2} label="Cliente final"></option>
          </datalist> */}

          <Input id="telefono" type="number" placeholder="Telefono" onChange={onChange} />

          <Input2 id="direccion" type="text" placeholder="Direccion" onChange={onChange} />

          <Input id="correo" type="text" placeholder="Correo" onChange={onChange} />

          {/* <Input2 id="status" list="opciones2" placeholder="Status" />
          <datalist id="opciones2">
            <option value="Activo"></option>
            <option value="Inactivo"></option>
          </datalist> */}
        </Typography>

        <Espacio></Espacio>

        <Contenido1>
          <Contenido2>
            <Boton type="submit">
              <Typography type="paragraph2">AGREGAR</Typography>
            </Boton>
          </Contenido2>
        </Contenido1>
      </Form>
    </div>
  )
}

export default ClientesMod
