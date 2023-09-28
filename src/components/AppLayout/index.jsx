import React from 'react'
import NavigationSideBar from 'src/components/NavigationSideBar'
import * as styles from './styles'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <React.Fragment>
      <NavigationSideBar />
      <styles.LayoutContainer>
        <Outlet />
      </styles.LayoutContainer>
    </React.Fragment>
  )
}

export default AppLayout
