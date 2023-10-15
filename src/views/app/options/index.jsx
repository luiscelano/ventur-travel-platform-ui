import React from 'react'
import * as styles from './styles'
import OptionsList from 'src/components/OptionsList'
import { Outlet } from 'react-router-dom'

const OptionsView = () => {
  return (
    <>
      <styles.OptionsViewContainer>
        <OptionsList />
        <Outlet />
      </styles.OptionsViewContainer>
    </>
  )
}

export default OptionsView
