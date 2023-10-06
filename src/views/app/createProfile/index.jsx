import React from 'react'
import { Contenido } from './styles'
import { Section1 } from './styles'
import { SubSection1 } from './styles'
import { List } from './styles'
import { Item } from './styles'
import { SubSection2 } from './styles'
import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import Field from 'src/components/Field'

const CreateProfile = () => {
  return <>
    <Contenido>
      <Section1>
        <Typography type="title" color="dark">Crear Usuario</Typography>
        <Typography Typography type="paragraph2">Creación de usuario</Typography>
        <Field type="noDisable" size="large" color="background1" placeholder="Usuario"></Field>
        <Field type="noDisable" size="large" color="background2" placeholder="Nombre"></Field>
        <Field type="noDisable" size="large" color="background1" placeholder="Apellido"></Field>
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
        <Button size="small" color="background1">INGRESAR</Button>
      </SubSection2>
      </Section1>
    </Contenido>
  </>
}

export default CreateProfile