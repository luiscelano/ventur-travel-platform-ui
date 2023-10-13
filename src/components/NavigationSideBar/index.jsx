import React from 'react'
import * as styles from './styles'
import logo from 'src/assets/ventur-logo.png'
import getNavigationItems from 'src/config/navigationItems'
import NavigationItemList from 'src/components/NavigationItemList'
import CloseIcon from 'src/assets/icons/CloseIcon'

const NavigationSideBar = () => {
  const navigationItems = getNavigationItems()

  return (
    <styles.NavigationSideBarContainer>
      <styles.NavigationSideBarHeading>
        <CloseIcon width={35} height={35} />
      </styles.NavigationSideBarHeading>
      <styles.NavigationSideBarContent>
        <styles.LogoContainer src={logo} />
        <NavigationItemList navigationItems={navigationItems} />
      </styles.NavigationSideBarContent>
    </styles.NavigationSideBarContainer>
  )
}

export default NavigationSideBar
