import React from 'react'
import * as styles from './styles'
import { NavLink } from 'react-router-dom'
import Typography from 'src/components/Typography'
import { useTheme } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import * as selectors from 'src/redux/ui/selectors'
import * as actions from 'src/redux/ui/actions'

/**hola */
const renderNavigationItem = ({ id, label, redirect, Icon }) => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const currentTab = useSelector(selectors.getCurrentTab)

  const setCurrentTab = (id) => dispatch(actions.setCurrentTab(id))

  return (
    <NavLink key={id} to={redirect} onClick={() => setCurrentTab(id)}>
      <styles.NavigationItemContainer>
        <Icon color={id === currentTab ? theme.color.main : theme.color.text.default} />
        <Typography type="paragraph1" color={id === currentTab ? 'light' : 'default'}>
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
