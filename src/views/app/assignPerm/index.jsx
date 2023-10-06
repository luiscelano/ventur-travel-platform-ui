import React from 'react'
import { Contenido } from './styles'
import { Section1 } from './styles'
import { SubSection1 } from './styles'
import { List } from './styles'
import { Item } from './styles'
import { SubSection2 } from './styles'
import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import Select from 'src/components/Select'

const AssignPerm = () => {
  return <>
    <Contenido>
      <Section1>
        <Typography type="title" color="dark">Edición de Usuarios</Typography>
        <Typography Typography type="paragraph2">Asignación de permisos según el tipo de usuario</Typography>
        <Select size="large" color="background1">
          <option value="1">Usuario</option>
          <option value="0">Otro</option>
        </Select>
        <Typography type="paragraph1" size="small">Tipo de Usuario:</Typography>
        <SubSection1>
          <List>
            <Item>
              <input type="radio" id="jefe" name="rol" value="2"></input>
              <label for="jefe">
                <Typography type="paragraph1" size="small">Jefe</Typography>
              </label>
            </Item>
            <Item>
              <input type="radio" id="administrador" name="rol" value="1"></input>
              <label for="administrador"><Typography type="paragraph1" size="small">Administrador</Typography></label>
            </Item>
            <Item>
              <input type="radio" id="vendedor" name="rol" value="0"></input>
              <label for="vendedor"><Typography type="paragraph1" size="small">Vendedor</Typography></label>
            </Item>
          </List>
        </SubSection1>
        <SubSection2>
        <Button size="small" color="background1">MODIFICAR</Button>
      </SubSection2>
      </Section1>
    </Contenido>
  </>
}

export default AssignPerm