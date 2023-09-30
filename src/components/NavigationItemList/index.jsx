import React from 'react'
import * as styles from './styles'
import { NavLink, useLocation } from 'react-router-dom'
import Typography from 'src/components/Typography'
import { useTheme } from 'styled-components'

const renderNavigationItem = ({ id, label, redirect, Icon }) => {
  const theme = useTheme()

  const location = useLocation() 
  const selected = location.pathname === redirect

  return (
    <NavLink key={id} to={redirect}>
      <styles.NavigationItemContainer>
        <Icon color={selected ? theme.color.main : theme.color.text.default} />
        <Typography type="paragraph1" color={selected ? 'light' : 'default'}>
          {label}
        </Typography>
      </styles.NavigationItemContainer>
    </NavLink>
  )
}

const NavigationItemList = ({ navigationItems }) => {
  return (
    <styles.NavigationItemListContainer>{navigationItems.map(renderNavigationItem)}</styles.NavigationItemListContainer>
  )
}

export default NavigationItemList
