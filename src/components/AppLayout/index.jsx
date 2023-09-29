import React from 'react'
import NavigationSideBar from 'src/components/NavigationSideBar'
import * as styles from './styles'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <styles.MainLayout>
      <NavigationSideBar />
      <styles.LayoutContent>
        <Outlet />
      </styles.LayoutContent>
    </styles.MainLayout>
  )
}

export default AppLayout
