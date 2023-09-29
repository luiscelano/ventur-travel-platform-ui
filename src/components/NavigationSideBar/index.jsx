import React from 'react'
import * as styles from './styles'
import logo from 'src/assets/ventur-logo.png'

const NavigationSideBar = () => {
  return (
    <styles.NavigationSideBarContainer>
      <styles.NavigationSideBarHeading>heading here</styles.NavigationSideBarHeading>
      <styles.NavigationSideBarContent>
        <styles.LogoContainer src={logo} />
        <div>2</div>
      </styles.NavigationSideBarContent>
    </styles.NavigationSideBarContainer>
  )
}

export default NavigationSideBar
