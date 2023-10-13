import React from 'react'
import * as styles from './styles'
import Typography from '../Typography'
import { Link, useLocation } from 'react-router-dom'

const OptionsList = (props) => {
  const location = useLocation()

  return (
    <>
      <styles.OptionsContainer>
        <Link to="/app/options/access">
          <styles.OptionsItem selected={location.pathname === '/app/options/access'}>
            <Typography
              type="paragraph1"
              color={location.pathname === '/app/options/access' ? 'light' : 'default'}
              size="small">
              Asignar permisos
            </Typography>
          </styles.OptionsItem>
        </Link>
        <Link to="/app/options/permissions">
          <styles.OptionsItem selected={location.pathname === '/app/options/permissions'}>
            <Typography
              type="paragraph1"
              color={location.pathname === '/app/options/permissions' ? 'light' : 'default'}
              size="small">
              Modificar permisos
            </Typography>
          </styles.OptionsItem>
        </Link>
      </styles.OptionsContainer>
    </>
  )
}

export default OptionsList
